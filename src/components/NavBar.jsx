import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="m-auto text-2xl justify-between text-blue-500  flex w-5/5 p-4 ">
      <Link to="/">وثيقة</Link>{" "}
      <ul className="flex w-3/5 font-bold justify-between">
        <li>
          {" "}
          <Link to="/">الصفحة الرئيسية</Link>{" "}
        </li>
        <li>
          <Link to="/الإجراءات">أبرز الإجراءات</Link>
        </li>{" "}
        <li></li>
      </ul>
      <Link to="/مفضلة">مفضلة</Link>
    </nav>
  );
};

export default NavBar;
