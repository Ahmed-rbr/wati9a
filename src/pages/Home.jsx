import React, { useState } from "react";
import { Procedures } from "../data/Procedures";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [favs, setFavs] = useState(() => {
    return JSON.parse(localStorage.getItem("favo")) || [];
  });

  const handleFavo = (id) => {
    const updated = favs.includes(id)
      ? favs.filter((fid) => fid !== id)
      : [...favs, id];

    setFavs(updated);
    localStorage.setItem("favo", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen flex flex-col mt-6 justify-center items-center m-auto w-4/5">
      <div className="flex-grow w-full">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-12 mb-10 rounded-3xl shadow-lg text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
            وثيقة – دليلك البسيط للإجراءات الإدارية المغربية
          </h1>
          <p className="text-lg max-w-xl mx-auto">
            اكتشف الوثائق المطلوبة لأي إجراء إداري (بطاقة وطنية، جواز سفر، زواج،
            CNSS...) بسهولة وفي مكان واحد.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {Procedures.slice(0, 9).map((procedure) => (
            <Card
              key={procedure.id}
              category={procedure.category}
              title={procedure.title}
              id={procedure.id}
              favo={favs.includes(procedure.id)}
              onClick={() => handleFavo(procedure.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center w-full">
        <Link
          to="/الإجراءات"
          className="font-bold bg-blue-500 text-white text-2xl rounded-3xl px-16 py-4 shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
        >
          عرض الكل
        </Link>

        <p className="text-gray-600 text-sm mt-6">
          تصفح جميع الإجراءات الإدارية المتاحة الآن
        </p>
      </div>
    </div>
  );
};

export default Home;
