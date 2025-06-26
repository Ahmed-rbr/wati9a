import React from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import { Procedures } from "../data/Procedures";
import Card from "../components/Card";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto w-4/5">
      <NavBar />
      <h1 className=" font-bold text-2xl m-auto text-blue-950  my-8 ">
        وثيقة – دليلك البسيط للإجراءات الإدارية المغربية
      </h1>
      <h3 className="mb-12">
        اكتشف الوثائق المطلوبة لأي إجراء إداري (بطاقة وطنية، جواز سفر، زواج،
        CNSS...) بسهولة وفي مكان واحد.
      </h3>{" "}
      <Search />
      <div className="grid gap-6 grid-cols-3">
        {Procedures &&
          Procedures.map((procedure) => (
            <Card
              category={procedure.category}
              title={procedure.title}
              key={procedure.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
