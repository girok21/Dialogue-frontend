import { Video, Phone, UserPlus } from "lucide-react";

const UserActionButtons = () => {
  return (
    <div className="flex gap-4 items-center">
      <Phone className="w-5 h-5 cursor-pointer" />
      <Video className="w-5 h-5 cursor-pointer" />
      <UserPlus className="w-5 h-5 cursor-pointer" />
    </div>
  );
};

export default UserActionButtons;
