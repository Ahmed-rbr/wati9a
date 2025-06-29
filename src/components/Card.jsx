import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, category, id }) => {
  return (
    <div className="relative flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-tr from-blue-500 to-blue-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
        {category}
      </span>

      <h2 className="mt-8 mb-6 text-white text-2xl font-extrabold drop-shadow-lg">
        {title}
      </h2>

      <Link
        to={`/الإجراءات/${id}`}
        className="self-start bg-green-400 text-green-900 font-semibold rounded-xl px-8 py-3 hover:bg-green-500 hover:text-white transition-colors duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
      >
        عرض التفاصيل
      </Link>
    </div>
  );
};

export default Card;
