import React, { useState } from "react";
import Search from "../components/Search";
import { Procedures } from "../data/Procedures";
import Card from "../components/Card";

const ProceduresAll = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const [favs, setFavs] = useState(() => {
    return JSON.parse(localStorage.getItem("favo")) || [];
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase().trim());
  };

  const handleFavo = (id) => {
    const updated = favs.includes(id)
      ? favs.filter((fid) => fid !== id)
      : [...favs, id];

    setFavs(updated);
    localStorage.setItem("favo", JSON.stringify(updated));
  };

  const filteredProcedures = Procedures.filter((procedure) => {
    const matchesText = procedure.title.toLowerCase().includes(searchTerm);
    const matchesCategory = category ? procedure.category === category : true;
    return matchesText && matchesCategory;
  });

  return (
    <div className="flex min-h-screen flex-col items-center w-full px-4 py-6">
      <div className="w-full flex-grow max-w-6xl">
        <Search
          value={searchTerm}
          onChange={handleSearch}
          onClick={() => {
            setSearchTerm("");
            setCategory("");
          }}
          onCategoryChange={handleCategoryChange}
          categoryValue={category}
        />

        <div className="grid gap-6 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProcedures.length > 0 ? (
            filteredProcedures.map((procedure) => (
              <Card
                key={procedure.id}
                category={procedure.category}
                title={procedure.title}
                id={procedure.id}
                favo={favs.includes(procedure.id)}
                onClick={() => handleFavo(procedure.id)}
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
