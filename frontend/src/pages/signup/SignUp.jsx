import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-lg border border-white/20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> Buzzly</span>
        </h1>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-base text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-10 px-3 rounded-md border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="block text-sm text-gray-400 hover:underline hover:text-blue-500 mt-2"
          >
            Already Have An Account
          </Link>

          <button
            type="submit"
            className="w-full h-9 mt-2 rounded-md border cursor-pointer border-slate-700 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? (
              <span className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
