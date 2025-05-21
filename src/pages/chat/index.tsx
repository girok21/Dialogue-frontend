import ChannelInfoPanel from "@/components/chat/ChannelInfoPanel";
import ChatPanel from "@/components/chat/ChatPanel";
import UserInfoPanel from "@/components/chat/UserInfoPanel";
import NavSideBar from "@/components/sidebar/NavSideBar";
import SocialSidebar from "@/components/sidebar/SocialSideBar";

const HomePage = () => {
  return (
    <div className="flex flex-row">
      <NavSideBar />
      <SocialSidebar />
      <ChatPanel />
      {/* <UserInfoPanel
        user={{
          name: "Jane Doe",
          avatar: "https://i.pravatar.cc/150?img=47",
          banner:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          status: "online",
          bio: "UI Designer at CompanyX",
        }}
        className="w-80 h-screen"
      /> */}
      <ChannelInfoPanel
        channel={{
          name: "Frontend Devs",
          avatar: "https://i.pravatar.cc/150?img=47",
          banner:
            "https://images.unsplash.com/photo-1503264116251-35a269479413",
          description: "A space for frontend developers to hang out and chat.",
          users: [
            {
              name: "Alice",
              avatar: "https://i.pravatar.cc/150?img=10",
              status: "online",
            },
            {
              name: "Bob",
              avatar: "https://i.pravatar.cc/150?img=20",
              status: "offline",
            },
            {
              name: "Clara",
              avatar: "https://i.pravatar.cc/150?img=30",
              status: "online",
            },
            {
              name: "David",
              avatar: "https://i.pravatar.cc/150?img=40",
              status: "offline",
            },
            // Add more users as needed
          ],
        }}
        className="w-80 h-screen"
      />
    </div>
  );
};

export default HomePage;
