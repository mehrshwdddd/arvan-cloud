import pic from '../images/dr.webp'
import { IoMdArrowBack } from "react-icons/io";

export default function Hero1() {
  return (
    <div className="relative">
      <div className="relative container mx-auto py-32 px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div></div>
        <div dir="rtl" className="space-y-6 text-right p-8">
          <h2 className="text-4xl font-bold">زیرساخت یکپارچه ابری</h2>
          <p className="text-2xl text-gray-700 font-semibold">جهانی امن‌تر، سریع‌تر و دردسترس‌تر</p>
          <p className="leading-8 text-gray-700 font-semibold">
           با استفاده از زیرساخت یکپارچه، پایدار، امن و همیشه در دسترس ابر آروان، بدون دغدغه‌های زیرساختی به وب‌سایت و سرویس‌های خود سرعت ببخشید و تجربه‌ی کاربران‌تان را به شکل<br />
            چشم‌گیری بهبود دهید.
          </p>
          <div className="flex gap-4 justify-start">
            <button className="px-6 py-3 bg-teal-600 text-white rounded-xl shadow">
              شروع کنید
            </button>
            <button className="px-6 py-3 border border-teal-600 text-teal-600 rounded-xl shadow hover:text-white hover:bg-teal-600">
              تماس با فروش
            </button>
          </div>
        </div>
      </div>
      <div dir="rtl" className="relative container mx-auto px-6 pb-16">
        <div className="bg-white shadow-2xl rounded-4xl flex justify-between items-center">
         <div className='bg-teal-100'>
         <img src={pic} alt="pic" width={200} height={50} />
         </div>
          <div className=' ml-80'>
            <p className="text-pink-600 font-bold text-2xl">روی ابرها زندگی کن</p>
            <p className="font-bold text-2xl">در حوادث و بحران‌ها کسب‌وکارت رو نجات بده</p>
          </div>
          <button className=" ml-40 flex px-6 py-3 bg-teal-600 text-white rounded-xl shadow hover:bg-teal-700">
            درخواست مشاوره <IoMdArrowBack className=' mt-1 mr-1' />
          </button>
        </div>
      </div>
    </div>
  );
}
