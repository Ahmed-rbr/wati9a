import React from "react";
import Search from "../components/Search";
import { Procedures } from "../data/Procedures";
import Card from "../components/Card";

const ProceduresAll = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 py-6">
      <div className="w-full max-w-6xl">
        <Search />

        <div className="grid gap-6 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Procedures.map((procedure) => (
            <Card
              key={procedure.id}
              category={procedure.category}
              title={procedure.title}
              id={procedure.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProceduresAll;
