import { Button } from "@/components/ui/button";

type Props = {
  user: {
    name: string;
    avatar: string;
    banner: string;
    status: "online" | "offline";
    bio?: string;
  };
  className?: string;
};

const UserInfoPanel = ({ user, className }: Props) => {
  const statusColor = user.status === "online" ? "bg-green-500" : "bg-gray-400";

  return (
    <div className={`${className}`}>
      <div
        className={`flex flex-col justify-between h-full w-full bg-muted rounded-md shadow-sm`}
      >
        {/* Banner Section */}
        <div className="relative h-36 w-full">
          <img
            src={user.banner}
            alt="User Banner"
            className="h-full w-full object-cover"
          />

          {/* Avatar */}
          <div className="absolute -bottom-8 left-4">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-16 w-16 rounded-full border-4 border-muted"
              />
              <span
                className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-3 border-muted ${statusColor}`}
              />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-12 px-4">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          {user.bio && (
            <p className="text-sm text-muted-foreground mt-1">{user.bio}</p>
          )}
        </div>

        {/* Bottom Button */}
        <div className="px-4 pb-4 mt-auto">
          <Button variant="outline" className="w-full text-sm">
            View Full Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPanel;
