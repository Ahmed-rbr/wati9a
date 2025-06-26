import React from "react";
import NavBar from "../components/NavBar";
const Fav = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto w-4/5">
      <NavBar />
      <h1 className=" font-medium text-2xl w-3/5 mt-8 ">
        كل ما تحتاجه لفهم الوثائق الإدارية في المغرب اكتشف المتطلبات لأي وثيقة
        رسمية بطريقة سهلة وواضحة
      </h1>
    </div>
  );
};

export default Fav;
