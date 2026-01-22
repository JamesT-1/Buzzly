import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime.js";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  return (
    <div
      className={`flex items-end gap-2 mb-4 ${
        fromMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex items-end gap-2 ${fromMe ? "flex-row-reverse" : ""}`}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
          <img
            src={profilePic}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`flex flex-col ${fromMe ? "items-end" : "items-start"}`}
        >
          <div
            className={`p-3 ${shakeClass} rounded-lg max-w-xs wrap-break-word ${
              fromMe ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            {message.message}
          </div>
          <span className="text-xs text-gray-400 opacity-50 mt-1">
            {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
