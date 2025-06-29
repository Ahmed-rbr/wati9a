import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Procedures } from "../data/Procedures";
import Accordion from "../components/Accordion";
const ProcedureDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const handleClick = (id) => {
    setShow((prev) => (prev === id ? null : id));
  };
  const procedure = Procedures.find((proc) => proc.id === parseInt(id));
  return (
    <div className="flex flex-col gap-7 justify-center items-center m-auto md:4/5 sm:w-full p-4 lg:w-3/5">
      <h1 className="font-semibold mb-4 text-2xl underline">
        عنوان الإجراء : {procedure.title}
      </h1>

      <Accordion
        handleClick={() => handleClick(0)}
        show={show}
        title="📁 الوثائق المطلوبة"
        value={procedure.documents}
        key={0}
        ind={0}
      />
      <Accordion
        handleClick={() => handleClick(1)}
        show={show}
        title="📍 أين يتم الإجراء؟"
        value={procedure.location}
        key={1}
        ind={1}
      />
      <Accordion
        handleClick={() => handleClick(2)}
        show={show}
        title="⏳ مدة الإنجاز:
"
        value={procedure.duration}
        key={2}
        ind={2}
      />
      <Accordion
        handleClick={() => handleClick(3)}
        show={show}
        title="💰 التكلفة:
"
        value={procedure.cost}
        key={3}
        ind={3}
      />
      <Accordion
        handleClick={() => handleClick(4)}
        show={show}
        title="💡 نصائح مفيدة:
"
        value={procedure.tips}
        key={4}
        ind={4}
      />
    </div>
  );
};

export default ProcedureDetails;
