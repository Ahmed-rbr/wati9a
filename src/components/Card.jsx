import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, category, id }) => {
  return (
    <div className="flex flex-col p-4 rounded-2xl relative shadow-2xl bg-blue-300 hover:scale-110 ">
      <h1 className="font-bold text-xl text-white my-6">{title}</h1>
      <p className="left-0 top-0 absolute font-medium text-white rounded bg-red-400 p-2">
        {category}
      </p>
      <Link
        to={`/الإجراءات/${id}`}
        className="px-6 rounded-2xl bg-green-200 hover:scale-105 hover:cursor-pointer py-3"
      >
        عرض التفاصيل
      </Link>
    </div>
  );
};

export default Card;
