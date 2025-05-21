// components/SocialSidebar.tsx
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/avatar/UserAvatar";

const dummyUsers = [
  {
    name: "Alice",
    avatar: "https://i.pravatar.cc/150?img=1",
    status: "online",
  },
  {
    name: "Bob",
    avatar: "https://i.pravatar.cc/150?img=2",
    status: "offline",
  },
  {
    name: "Charlie",
    avatar: "https://i.pravatar.cc/150?img=3",
    status: "online",
  },
  {
    name: "Diana",
    avatar: "https://i.pravatar.cc/150?img=4",
    status: "offline",
  },
  {
    name: "Eve",
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "online",
  },
];

const SocialSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-background border-r flex flex-col">
      <div className="p-4 border-b">
        <Button className="w-full text-sm">Find or start a conversation</Button>
      </div>

      <div className="p-4 text-xs text-muted-foreground uppercase tracking-wide">
        Direct Messages
      </div>

      <div className="flex-1 overflow-y-auto">
        {dummyUsers.map((user, i) => (
          <UserAvatar
            user={{ ...user, status: user.status as "online" | "offline" }}
            key={i}
          />
        ))}
      </div>
    </aside>
  );
};

export default SocialSidebar;
