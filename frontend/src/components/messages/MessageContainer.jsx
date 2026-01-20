import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto md:min-w-xl h-120">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="text-sm font-medium text-gray-700">To:</span>{" "}
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>

          <div className="flex-1 px-4 overflow-auto">
            <Messages />
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-2 px-4 text-center text-gray-200 font-semibold sm:text-lg md:text-xl">
        <p>Welcome 👋 John Doe ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl" />
      </div>
    </div>
  );
};
