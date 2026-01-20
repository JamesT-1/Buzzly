import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="block w-full p-2.5 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
