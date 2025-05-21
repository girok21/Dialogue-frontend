import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserAvatar from "@/components/avatar/UserAvatar";

type ChannelUser = {
  name: string;
  avatar: string;
  status: "online" | "offline";
};

type Props = {
  channel: {
    name: string;
    avatar: string;
    banner: string;
    description?: string;
    users: ChannelUser[];
  };
  className?: string;
};

const ChannelInfoPanel = ({ channel, className }: Props) => {
  const activeUsers = channel.users.filter((u) => u.status === "online");
  const inactiveUsers = channel.users.filter((u) => u.status === "offline");

  return (
    <div className={`h-screen ${className}`}>
      <div className="flex flex-col h-full bg-muted shadow-sm overflow-hidden">
        {/* Banner Section */}
        <div className="relative h-36 w-full">
          <img
            src={channel.banner}
            alt="Channel Banner"
            className="h-full w-full object-cover"
          />
          {/* Avatar */}
          <div className="absolute -bottom-8 left-4">
            <div className="relative">
              <img
                src={channel.avatar}
                alt={channel.name}
                className="h-16 w-16 rounded-full border-4 border-muted"
              />
            </div>
          </div>
        </div>

        {/* Channel Info */}
        <div className="px-4 pt-8">
          <h2 className="text-lg font-semibold">{channel.name}</h2>
          {channel.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {channel.description}
            </p>
          )}
        </div>

        {/* Scrollable Members List */}
        <ScrollArea className="flex-1 mt-4 px-4">
          <div className="space-y-6 pb-4">
            {/* Active Users */}
            {activeUsers.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  Active Users
                </h3>
                <div className="">
                  {activeUsers.map((user, idx) => (
                    <UserAvatar key={idx} user={user} />
                  ))}
                </div>
              </div>
            )}

            {/* Inactive Users */}
            {inactiveUsers.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  Inactive Users
                </h3>
                <div className="">
                  {inactiveUsers.map((user, idx) => (
                    <UserAvatar key={idx} user={user} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Bottom Button */}
        <div className="px-4 py-4 border-t">
          <Button variant="outline" className="w-full text-sm">
            View Full Channel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChannelInfoPanel;
