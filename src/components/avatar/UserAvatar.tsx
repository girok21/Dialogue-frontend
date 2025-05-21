import { cn } from "@/lib/utils";

type props = {
  user: { name: string; avatar: string; status: "online" | "offline" };
  className?: string;
};

const UserAvatar = ({ user, className }: props) => {
  return (
    <div
      className={cn(
        "relative flex items-center gap-3 px-3 py-2 rounded hover:bg-muted transition",
        className
      )}
    >
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span
          className={cn(
            "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background",
            user.status === "online" ? "bg-green-500" : "bg-gray-500"
          )}
        />
      </div>
      <span className="text-sm font-medium">{user.name}</span>
    </div>
  );
};

export default UserAvatar;
