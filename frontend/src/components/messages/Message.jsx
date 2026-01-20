const Message = () => {
  return (
    <div className="flex justify-end items-end space-x-2">
      <div className="flex flex-col items-end space-y-1">
        <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs wrap-break-words">
          Hi what is up?
        </div>
        <span className="text-xs text-gray-500 opacity-50">12:42</span>
      </div>

      <div className="shrink-0">
        <div className="w-10 h-10 rounded-full overflow-hidden mb-5 ml-1">
          <img
            alt="User avatar"
            src="https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
