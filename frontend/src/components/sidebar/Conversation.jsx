import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../zustand/useConversation.js";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex items-center gap-2 rounded p-2 py-1 cursor-pointer hover:bg-sky-500 transition
          ${isSelected ? "bg-sky-500" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="relative">
          <img
            src={conversation.profilePic}
            alt="user avatar"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span
            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${
              isOnline ? "bg-green-500" : "bg-gray-500"
            }  border-2 border-gray-900`}
          />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="my-0 h-px w-full bg-gray-600/50" />}
    </>
  );
};

export default Conversation;
