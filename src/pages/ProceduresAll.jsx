import React, { useState } from "react";
import Search from "../components/Search";
import { Procedures } from "../data/Procedures";
import Card from "../components/Card";

const ProceduresAll = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase().trim());
  };

  const filteredProcedures = Procedures.filter((procedure) =>
    procedure.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="flex flex-col items-center w-full px-4 py-6">
      <div className="w-full max-w-6xl">
        <Search
          value={searchTerm}
          onClick={() => {
            setSearchTerm("");
          }}
          onChange={handleSearch}
        />

        <div className="grid gap-6 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProcedures.length > 0 ? (
            filteredProcedures.map((procedure) => (
              <Card
                key={procedure.id}
                category={procedure.category}
                title={procedure.title}
                id={procedure.id}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600 text-lg">
              لا يوجد أي إجراء يطابق بحثك.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProceduresAll;
