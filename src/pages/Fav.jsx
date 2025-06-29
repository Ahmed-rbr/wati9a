import React, { useState } from "react";
import { Procedures } from "../data/Procedures";
import Card from "../components/Card";

const Fav = () => {
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

  const favProcedures = Procedures.filter((p) => favs.includes(p.id));

  return (
    <div className="flex flex-col items-center w-full px-4 py-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl font-bold text-blue-900 text-center mb-8">
          📌 المفضلة
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {favProcedures.length > 0 ? (
            favProcedures.map((procedure) => (
              <Card
                key={procedure.id}
                category={procedure.category}
                title={procedure.title}
                id={procedure.id}
                favo={true}
                onClick={() => handleFavo(procedure.id)}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg">
              لا توجد إجراءات مضافة إلى المفضلة بعد.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fav;
