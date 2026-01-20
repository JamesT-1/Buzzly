const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-xl border border-white/20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> Buzzly</span>
        </h1>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block mb-1 text-base text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full h-10 px-3 rounded-md border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-base text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 px-3 rounded-md border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <a
            href="#"
            className="block text-sm text-gray-400 hover:underline hover:text-blue-500"
          >
            {"Don't"} Have An Account?
          </a>

          <button
            type="submit"
            className="w-full h-9 mt-2 rounded-md bg-blue-600 cursor-pointer text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
