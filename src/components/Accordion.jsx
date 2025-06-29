import React from "react";

const Accordion = ({ title, value, show, handleClick, ind }) => {
  const isOpen = show === ind;

  return (
    <div className="w-full border border-gray-300 rounded">
      <button
        onClick={handleClick}
        className="w-full text-right px-4 py-3 font-semibold hover:cursor-pointer text-blue-900 bg-gray-100 hover:bg-gray-200"
      >
        {title}
      </button>

      {isOpen && (
        <div className="px-4 py-3 bg-white text-gray-800 border-t">
          {Array.isArray(value) ? (
            <ul className="list-disc ps-5 space-y-1">
              {value.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{value}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
