import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Message = {
  id: number;
  avatar: string;
  username: string;
  time: string;
  text: string;
};

const ChatMessage = ({ message }: { message: Message }) => {
  return (
    <div className="flex items-start gap-3 px-4 py-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={message.avatar} />
        <AvatarFallback>{message.username[0]}</AvatarFallback>
      </Avatar>
      <div>
        <div className="text-sm leading-tight">
          <span className="font-semibold mr-1">{message.username}</span>
          <span className="text-xs text-muted-foreground">{message.time}</span>
        </div>
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
