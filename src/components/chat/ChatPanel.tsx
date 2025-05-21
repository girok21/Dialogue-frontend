import { ScrollArea } from "@/components/ui/scroll-area";
import UserAvatar from "../avatar/UserAvatar";
import UserActionButtons from "./UserActionButtons";
import ChatMessage from "./ChatMessage";

type Message = {
  id: number;
  avatar: string;
  username: string;
  time: string;
  text: string;
};

const dummyMessages: Message[] = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=10",
    username: "Alice",
    time: "10:24 AM",
    text: "Hey! Are you joining the meeting?",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=20",
    username: "Bob",
    time: "10:25 AM",
    text: "Yeah, just give me 2 mins.",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=10",
    username: "Alice",
    time: "10:26 AM",
    text: "Cool, I’ll wait.",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=30",
    username: "Charlie",
    time: "10:27 AM",
    text: "Did you check the latest updates?",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=20",
    username: "Bob",
    time: "10:28 AM",
    text: "Not yet, I’ll do it now.",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/150?img=40",
    username: "Diana",
    time: "10:29 AM",
    text: "Let me know what you think!",
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/150?img=50",
    username: "Evan",
    time: "10:30 AM",
    text: "Anyone up for a quick game after lunch?",
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/150?img=10",
    username: "Alice",
    time: "10:31 AM",
    text: "Sure, I’m in!",
  },
  {
    id: 9,
    avatar: "https://i.pravatar.cc/150?img=20",
    username: "Bob",
    time: "10:32 AM",
    text: "Same here!",
  },
  {
    id: 10,
    avatar: "https://i.pravatar.cc/150?img=60",
    username: "Fay",
    time: "10:33 AM",
    text: "Let’s meet in the usual room?",
  },
  {
    id: 11,
    avatar: "https://i.pravatar.cc/150?img=30",
    username: "Charlie",
    time: "10:34 AM",
    text: "Yep, sounds good.",
  },
  {
    id: 12,
    avatar: "https://i.pravatar.cc/150?img=40",
    username: "Diana",
    time: "10:35 AM",
    text: "I’m bringing snacks 😄",
  },
  {
    id: 13,
    avatar: "https://i.pravatar.cc/150?img=50",
    username: "Evan",
    time: "10:36 AM",
    text: "Awesome! Thanks Diana.",
  },
  {
    id: 14,
    avatar: "https://i.pravatar.cc/150?img=10",
    username: "Alice",
    time: "10:37 AM",
    text: "Let’s make this quick, I have a call at 11.",
  },
  {
    id: 15,
    avatar: "https://i.pravatar.cc/150?img=20",
    username: "Bob",
    time: "10:38 AM",
    text: "Noted. I’ll keep an eye on the time.",
  },
  {
    id: 16,
    avatar: "https://i.pravatar.cc/150?img=60",
    username: "Fay",
    time: "10:39 AM",
    text: "All set on my side.",
  },
  {
    id: 17,
    avatar: "https://i.pravatar.cc/150?img=30",
    username: "Charlie",
    time: "10:40 AM",
    text: "Let’s do this!",
  },
  {
    id: 18,
    avatar: "https://i.pravatar.cc/150?img=10",
    username: "Alice",
    time: "10:41 AM",
    text: "Check out this link I found.",
  },
  {
    id: 19,
    avatar: "https://i.pravatar.cc/150?img=20",
    username: "Bob",
    time: "10:42 AM",
    text: "Looks interesting, bookmarking it.",
  },
  {
    id: 20,
    avatar: "https://i.pravatar.cc/150?img=40",
    username: "Diana",
    time: "10:43 AM",
    text: "Thanks for sharing!",
  },
  {
    id: 21,
    avatar: "https://i.pravatar.cc/150?img=50",
    username: "Evan",
    time: "10:44 AM",
    text: "Got any more of these?",
  },
  {
    id: 22,
    avatar: "https://i.pravatar.cc/150?img=60",
    username: "Fay",
    time: "10:45 AM",
    text: "Here’s another cool one I found.",
  },
  {
    id: 23,
    avatar: "https://i.pravatar.cc/150?img=10",
    username: "Alice",
    time: "10:46 AM",
    text: "Nice! Adding it to my reading list.",
  },
  {
    id: 24,
    avatar: "https://i.pravatar.cc/150?img=20",
    username: "Bob",
    time: "10:47 AM",
    text: "Let’s create a shared folder for this?",
  },
  {
    id: 25,
    avatar: "https://i.pravatar.cc/150?img=30",
    username: "Charlie",
    time: "10:48 AM",
    text: "Good idea, I’ll set it up.",
  },
  {
    id: 26,
    avatar: "https://i.pravatar.cc/150?img=40",
    username: "Diana",
    time: "10:49 AM",
    text: "Just dropped a few resources in it.",
  },
  {
    id: 27,
    avatar: "https://i.pravatar.cc/150?img=50",
    username: "Evan",
    time: "10:50 AM",
    text: "Perfect. Let’s keep it updated.",
  },
  {
    id: 28,
    avatar: "https://i.pravatar.cc/150?img=60",
    username: "Fay",
    time: "10:51 AM",
    text: "Done with my tasks for the day!",
  },
  {
    id: 29,
    avatar: "https://i.pravatar.cc/150?img=10",
    username: "Alice",
    time: "10:52 AM",
    text: "Well done! I’m still catching up 😅",
  },
  {
    id: 30,
    avatar: "https://i.pravatar.cc/150?img=20",
    username: "Bob",
    time: "10:53 AM",
    text: "No worries, we’ll sync tomorrow!",
  },
];

const ChatPanel = () => {
  return (
    <div className="flex-1 h-screen flex flex-col bg-background">
      <div className="flex flex-row justify-between p-4 border-b">
        <UserAvatar
          user={{
            name: "dummy_name",
            avatar: "https://i.pravatar.cc/150?img=10",
            status: "online",
          }}
        />
        <UserActionButtons />
      </div>
      <ScrollArea className="flex-1 overflow-y-scroll">
        <div className="py-4 space-y-2 px-4">
          {dummyMessages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </div>
      </ScrollArea>

      {/* Optional: input bar at bottom */}
      <div className="border-t px-4 py-2">
        <input
          type="text"
          placeholder="Send a message..."
          className="w-full border rounded px-3 py-2 text-sm outline-none"
        />
      </div>
    </div>
  );
};

export default ChatPanel;
