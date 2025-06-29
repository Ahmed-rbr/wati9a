import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          وثيقة
        </Link>

        <ul className="hidden md:flex gap-6 text-blue-900 font-semibold text-lg">
          <li>
            <Link to="/">الصفحة الرئيسية</Link>
          </li>
          <li>
            <Link to="/الإجراءات">جميع الإجراءات</Link>
          </li>
          <li>
            <Link to="/مفضلة">مفضلة</Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-900"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-2 text-blue-900 font-semibold text-lg">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/الإجراءات" onClick={() => setOpen(false)}>
              جميع الإجراءات
            </Link>
          </li>
          <li>
            <Link to="/مفضلة" onClick={() => setOpen(false)}>
              مفضلة
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
