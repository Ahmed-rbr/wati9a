import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 pt-6 mt-12 text-center text-m text-gray-500">
      <p>© {new Date().getFullYear()} وثيقة - جميع الحقوق محفوظة</p>
      <p className="mt-2">
        تم تطويره لمساعدة المواطنين على فهم الإجراءات الإدارية
      </p>
    </footer>
  );
};

export default Footer;
