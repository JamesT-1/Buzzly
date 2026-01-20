import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-lg border border-white/20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> Buzzly</span>
        </h1>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block mb-1 text-base text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-10 px-3 rounded-md border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-base text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Johndoe"
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

          <div>
            <label className="block mb-1 text-base text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-10 px-3 rounded-md border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <GenderCheckBox />

          <a
            href="#"
            className="block text-sm text-gray-400 hover:underline hover:text-blue-500 mt-2"
          >
            Already Have An Account
          </a>

          <button
            type="submit"
            className="w-full h-9 mt-2 rounded-md border cursor-pointer border-slate-700 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
