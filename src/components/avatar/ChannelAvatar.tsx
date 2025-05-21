type props = {
  avatarUrl: string;
};
const defaultAvatarUrl =
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

const ChannelAvatar = ({ avatarUrl }: props) => {
  return (
    <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-700">
      <img
        src={avatarUrl || defaultAvatarUrl}
        alt="Channel Avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ChannelAvatar;
