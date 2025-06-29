import React from "react";
import Search from "../components/Search";
import { Procedures } from "../data/Procedures";
import Card from "../components/Card";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto w-4/5">
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
          Procedures.slice(0, 9).map((procedure) => (
            <Card
              category={procedure.category}
              title={procedure.title}
              id={procedure.id}
              key={procedure.id}
            />
          ))}
      </div>
      <button className="font-bold my-8 bg-blue-300 text-2xl text-white rounded-2xl px-12 py-3  hover:cursor-pointer hover:bg-blue-600 transition-all duration-150 hover:scale-110">
        اكتشف{" "}
      </button>
    </div>
  );
};

export default Home;
