import React from "react";
import Select from "./Select";
const Search = ({
  onChange,
  value,
  onClick,
  onCategoryChange,
  categoryValue,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto my-8 px-4">
      <input
        type="text"
        value={value}
        placeholder="ابحث عن إجراء..."
        onChange={onChange}
        className="flex-grow rounded-xl border border-blue-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full sm:w-auto"
      />

      <div className="w-full sm:w-auto max-w-xs">
        <Select value={categoryValue} onChange={onCategoryChange} />
      </div>

      <button
        onClick={onClick}
        className="bg-blue-500 text-white font-bold rounded-2xl px-6 py-3 text-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 shadow-md w-full sm:w-auto"
      >
        مسح البحث
      </button>
    </div>
  );
};

export default Search;
