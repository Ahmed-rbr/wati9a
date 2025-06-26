import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center gap-8 items-center  m-auto mb-8">
      <input
        type="text"
        className="w-86 rounded-xl focus:outline-0 border border-blue-300  p-2"
      />
      <button className="font-bold bg-blue-300 text-2xl text-white rounded-2xl px-6 py-3  hover:cursor-pointer hover:bg-blue-600 transition-all duration-150 hover:scale-110">
        اكتشف{" "}
      </button>
    </div>
  );
};

export default Search;
