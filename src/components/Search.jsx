import React from "react";

const Search = ({ onChange, value, onClick }) => {
  return (
    <div className="flex justify-center items-center gap-4 max-w-md mx-auto my-8 px-4">
      <input
        type="text"
        value={value}
        placeholder="ابحث عن إجراء..."
        onChange={onChange}
        className="flex-grow rounded-xl border border-blue-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        onClick={onClick}
        className="bg-blue-500 text-white font-bold rounded-2xl px-8 py-3 text-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 shadow-md"
      >
        مسح البحث
      </button>
    </div>
  );
};

export default Search;
