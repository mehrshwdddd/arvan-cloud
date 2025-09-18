import React from "react";
import global from "../images/globe.svg"

export default function Hero2() {
  return (
    <div className="relative text-white  bg-gradient-to-l from-[#062023] to-teal-900 py-16 px-5 mb-20">
      <div className=" flex justify-around items-center">
        <div className="flex justify-center">
          <img
          className=" ml-64"
            src={global} 
            alt="global"
            width={1000}
            height={80}
          />
        </div>

        <div className="text-right mr-58 mb-64">
          <p className="text-teal-400 mb-2">شبکه ابر آروان</p>
          <h2 className="text-4xl font-bold mb-4">گستره‌ای به وسعت جهان</h2>
          <p className="leading-8 text-teal-100">
            ابر آروان با در اختیار داشتن ۴۰ پاپ‌سایت در بیش از ۳۰<br /> کشور و ۴ دیتاسنتر در نقا
            ط مختلف ایران به <br />کسب‌وکارهای مختلف امکان می‌دهد تا به‌کمک امن‌ترین<br /> و پایدارترین زیرساخت‌های ابری سرویس‌های خود را<br /> توسعه دهند.
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-start ml-86 gap-50 mt-16 text-center">
        <div>
          <h3 className="text-xl font-bold text-teal-500 border-r border-r-teal-500">+۲۰۰ هزار</h3>
          <p className="text-white mt-2">مشتری فعال</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-teal-500 border-r border-r-teal-500">۴۰</h3>
          <p className="text-white mt-2">پاپ‌سایت در دنیا</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-teal-500 border-r border-r-teal-500">۵۰۰ میلیون</h3>
          <p className="text-white mt-2">درخواست در ساعت</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-teal-500 border-r border-r-teal-500">۹۹.۹۹٪</h3>
          <p className="text-white mt-2">آپ‌تایم در محصولات</p>
        </div>
      </div>
    </div>
  );
}
