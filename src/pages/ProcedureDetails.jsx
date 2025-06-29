import React from "react";
import { useParams } from "react-router-dom";
import { Procedures } from "../data/Procedures";
const ProcedureDetails = () => {
  const { id } = useParams();

  const procedure = Procedures.find((proc) => proc.id === parseInt(id));
  return (
    <div className="flex flex-col justify-center items-center m-auto w-4/5">
      <h1>{procedure.title}</h1>
      <h1>{procedure.category}</h1>
      <h1>{procedure.cost}</h1>
    </div>
  );
};

export default ProcedureDetails;
