const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 rounded p-2 py-1 cursor-pointer hover:bg-sky-500 transition">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D"
            alt="user avatar"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-gray-900" />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">John Doe</p>
          </div>
        </div>
      </div>

      <div className="my-0 h-px w-full bg-gray-600/50" />
    </>
  );
};

export default Conversation;
