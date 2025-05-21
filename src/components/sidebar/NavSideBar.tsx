import ChannelAvatar from "../avatar/ChannelAvatar";

const channelAvatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
  "https://i.pravatar.cc/40?img=5",
  "https://i.pravatar.cc/40?img=6",
  "https://i.pravatar.cc/40?img=7",
  "https://i.pravatar.cc/40?img=8",
  "https://i.pravatar.cc/40?img=9",
  "https://i.pravatar.cc/40?img=10",
];

const NavSideBar = () => {
  return (
    <div className="w-16 h-screen bg-gray-900 flex flex-col items-center py-4 space-y-4">
      <ChannelAvatar avatarUrl="/dark-logo-small.svg" />
      <div className="mb-5"></div>
      {channelAvatars.map((avatar, index) => (
        <ChannelAvatar avatarUrl={avatar} key={index} />
      ))}
    </div>
  );
};

export default NavSideBar;
