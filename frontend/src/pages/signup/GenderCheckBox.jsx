const GenderCheckBox = () => {
  return (
    <div className="flex gap-6 mt-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-sm text-gray-300">Male</span>
        <input
          type="checkbox"
          className="h-4 w-4 rounded border border-slate-900 bg-transparent text-blue-600 focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-sm text-gray-300">Female</span>
        <input
          type="checkbox"
          className="h-4 w-4 rounded border border-slate-900 bg-transparent text-blue-600 focus:ring-2 focus:ring-blue-500"
        />
      </label>
    </div>
  );
};

export default GenderCheckBox;
