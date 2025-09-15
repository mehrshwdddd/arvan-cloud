import React, { useState } from "react";
import serverImg from "../images/cloud-computing-desktop.svg";
import content from "../images/cdn-desktop.svg";
import cloud from "../images/cloud-storage-desktop.svg";
import video from "../images/video-platform-desktop.svg";
import container from "../images/paas-desktop.svg";
import db from "../images/dbaas-desktop.svg";
import logo from "../images/paas.svg";
import { IoIosArrowBack } from "react-icons/io";

export default function CloudProductsSection() {
  const [activeImage, setActiveImage] = useState(serverImg);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { name: "سرور ابری", img: serverImg },
    { name: "شبکه توزیع محتوا", img: content },
    { name: "فضای ابری", img: cloud },
    { name: "پلتفرم ویدیو", img: video },
    { name: "کانتینر ابری", img: container },
    { name: "دیتابیس ابری", img: db },
  ];

  return (
    <section className="bg-gray-50 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1 flex justify-center">
          <img
            src={activeImage}
            alt="active image"
            className="w-full h-full mt-64 mb-10 max-w-xl shadow-xl rounded-2xl transition-all duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col items-end space-y-6 text-right">
          <p className="text-teal-600 font-medium">محصولات ابری آروان</p>
          <h2 className="text-3xl font-bold text-gray-700">
            پوشش کامل نیازهای شما برای راه‌اندازی کسب‌وکاری آنلاین
          </h2>

          <ul className="flex font-semibold mt-4 gap-5">
            {items.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer text-lg p-2 rounded text-right ${
                  activeIndex === index ? "bg-white" : "text-gray-700"
                }`}
                onClick={() => {
                  setActiveImage(item.img);
                  setActiveIndex(index);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-end gap-2 mt-6">
            <img src={logo} alt="logo" width={40} height={80} />
            <p className="text-teal-700 font-bold text-xl border-r-2 border-teal-700 pr-4 text-right">
              راه‌اندازی آسان و پایدار اپلیکیشن‌ها
            </p>
          </div>

          <p className="text-gray-700 text-sm mt-4 max-w-md text-right">
            کانتینر ابری یا سکوی ابری آروان مبتنی بر Container و بر اساس
            استانداردهای Kubernetes است. شما می‌توانید تنها با یک دستور در CLI
            ایده‌های نرم‌افزاری خود را توسعه دهید و آن‌ها را به محصول تبدیل
            کنید. فرقی نمی‌کند نرم‌افزاری ساده یا پیچیده دیپلوی کنید؛ در کانتینر
            ابری (PaaS) آروان تمامی نیازمندی‌های زیرساختی شما به آسانی تامین
            می‌شود و با کنترل مداوم وضعیت زیرساخت، نرم‌افزارتان همیشه در دسترس
            خواهد بود.
          </p>

          <button className="text-teal-700 font-bold hover:cursor-pointer flex items-center mt-4 self-end">
            <IoIosArrowBack className="text-2xl mr-2" /> 
            بیشتر بدانید
           
          </button>
        </div>
      </div>
    </section>
  );
}
