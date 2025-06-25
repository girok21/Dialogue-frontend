const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const diff = execSync("git diff --cached -U0 --no-color --diff-filter=ACM")
  .toString()
  .split("\n");

const violations = [];
let currentFile = null;

diff.forEach((line) => {
  if (line.startsWith("diff --git")) {
    const match = line.match(/b\/(.+)$/);
    if (match) {
      currentFile = match[1];
    }
  } else if (line.startsWith("+++ ") || line.startsWith("--- ")) {
    return;
  } else if (line.startsWith("+") && !line.startsWith("+++") && currentFile) {
    const codeLine = line.slice(1).trim();

    if (/console\.log|console\.debug/.test(codeLine)) {
      violations.push(`${currentFile} → Disallowed console: ${codeLine}`);
    }

    const commentMatch = codeLine.match(/\/\/(.*)/);
    if (commentMatch) {
      const comment = commentMatch[1].trim();
      if (!comment.startsWith("exp:")) {
        violations.push(`${currentFile} → Invalid comment: // ${comment}`);
      }
    }
  }
});

const logPath = path.resolve(".git", "violations.log");

if (violations.length) {
  const logContent = [
    "❌ Violations in changed lines:\n",
    ...violations.map((v) => `- ${v}`),
    "\n🔎 Please fix these before committing.\n",
  ].join("\n");

  fs.writeFileSync(logPath, logContent, "utf-8");

  console.error(logContent);
  console.error(`💡 Full report saved at: ${logPath}`);
  process.exit(1);
} else {
  if (fs.existsSync(logPath)) fs.unlinkSync(logPath); // cleanup old log
  console.log("✅ All changed lines are clean.");
}
