import React from "react";
import logo from "../images/logo-header-desktop-v6.svg";
import { FaRegBell } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
export default function Nvabar() {
  return (
    <div className=" fixed top-0 left-0 w-full bg-white shadow z-50 pb-3">
      <div dir="rtl" className=" flex items-center justify-around p-5   ">
        <div>
          <img src={logo} alt="logo" width={150} height={150} />
        </div>
        <div className=" flex">
          <ul dir="rtl" className=" flex gap-5 text-sm">
            <li>اتاق خبر</li>
            <li>بلاگ</li>
            <li className=" border-l border-gray-500 pl-5">تماس با ما</li>
          </ul>
          <FaRegBell className=" text-lg mx-3" />
          <IoIosArrowDown className=" text-sm" />
          <TbWorld className=" text-lg mx-0" />
        </div>
      </div>
      <div dir="rtl" className=" flex items-center justify-around mx-75">
        <div className=" flex">
          <ul dir="rtl" className=" flex gap-10">
            <li className="text-lg flex text-gray-700 hover:bg-[#e0f7f7] hover:text-[#00b9d0] hover:cursor-pointer">
              محصولات
              <IoIosArrowDown className=" text-lg mt-1.5 mr-2" />
            </li>
            <li className="text-lg flex text-gray-700 hover:bg-[#e0f7f7] hover:text-[#00b9d0] hover:cursor-pointer">
              راهکارها <IoIosArrowDown className=" text-lg mt-1.5 mr-2" />
            </li>
            <li className="text-lg flex text-gray-700 hover:bg-[#e0f7f7] hover:text-[#00b9d0] hover:cursor-pointer">
              قیمت‌گذاری <IoIosArrowDown className=" text-lg mt-1.5 mr-2" />
            </li>
            <li className="text-lg flex text-gray-700 hover:bg-[#e0f7f7] hover:text-[#00b9d0] hover:cursor-pointer">
              منابع دانش <IoIosArrowDown className=" text-lg mt-1.5 mr-2" />
            </li>
            <li className="text-lg flex text-gray-700 hover:bg-[#e0f7f7] hover:text-[#00b9d0] hover:cursor-pointer">خدمات سازمانی</li>
            <li className="text-lg flex text-gray-700 hover:bg-[#e0f7f7] hover:text-[#00b9d0] hover:cursor-pointer">خدمات دواپس</li>
          </ul>
        </div>
        <div dir="rtl" className=" flex gap-5">
           <button className=" rounded-lg border px-4 py-2 text-sm hover:cursor-pointer">ورود</button>
           <button className=" rounded-lg border px-4 py-2 text-sm text-white bg-[#007070] hover:cursor-pointer">ثبت نام</button>
        </div>
      </div>
    </div>
  );
}
