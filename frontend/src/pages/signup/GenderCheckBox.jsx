const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-6 mt-2">
      <label
        className={`flex items-center gap-2 cursor-pointer ${
          selectedGender === "male" ? "selected" : ""
        }`}
      >
        <span className="text-sm text-gray-300">Male</span>
        <input
          type="checkbox"
          className="h-4 w-4 rounded border border-slate-900 bg-transparent text-blue-600 focus:ring-2 focus:ring-blue-500"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
        />
      </label>

      <label
        className={`flex items-center gap-2 cursor-pointer ${
          selectedGender === "female" ? "selected" : ""
        }`}
      >
        <span className="text-sm text-gray-300">Female</span>
        <input
          type="checkbox"
          className="h-4 w-4 rounded border border-slate-900 bg-transparent text-blue-600 focus:ring-2 focus:ring-blue-500"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
        />
      </label>
    </div>
  );
};

export default GenderCheckBox;
