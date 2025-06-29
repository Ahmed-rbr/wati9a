import React, { useState, useRef, useEffect } from "react";

const categories = [
  "جميع الفئات",
  "الهوية",
  "المدنية",
  "الإقامة",
  "النقل",
  "السكن",
  "المرافق",
  "المالية",
  "الإدارية",
  "السفر",
  "الجمارك",
  "الصحة",
  "السلامة",
  "العمل",
  "التجارة",
  "التعليم",
];
export default function CustomSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (cat) => {
    onChange(cat === "جميع الفئات" ? "" : cat);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-blue-300 rounded-xl px-4 py-3 text-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-400 flex justify-between items-center"
        type="button"
      >
        <span>{value || "جميع الفئات"}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-white border border-blue-300 rounded-xl max-h-48 overflow-y-auto shadow-lg"
          role="listbox"
        >
          {categories.map((cat) => (
            <li
              key={cat}
              role="option"
              aria-selected={value === (cat === "جميع الفئات" ? "" : cat)}
              onClick={() => handleSelect(cat)}
              className={`cursor-pointer px-4 py-2 hover:bg-blue-100 text-right ${
                value === (cat === "جميع الفئات" ? "" : cat)
                  ? "bg-blue-200 font-semibold"
                  : ""
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
