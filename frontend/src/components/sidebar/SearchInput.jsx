import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 mb-2">
      <input
        type="text"
        placeholder="Search..."
        className="h-10 w-full rounded-full border border-gray-300 bg-transparent px-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
      />
      <button
        type="submit"
        className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
