import Image from "next/image";
import { icons, lis } from "./Text";

const footer = () => (
  <>
    {/* تغییر: اضافه شدن flex-col برای موبایل و lg:flex-row برای دسکتاپ */}
    <footer className="flex flex-col lg:flex-row border-y border-y-zinc-300">
      {/* بخش اول: لوگو و خبرنامه */}
      {/* تغییر: حذف border سمت چپ در موبایل و اضافه کردن border پایین */}
      <div className="border-b lg:border-b-0 lg:border-l lg:border-l-zinc-300 w-full pb-9">
        <div className="mt-8 px-6 lg:pr-14 lg:pl-0">
          <div className="flex justify-center items-center p-2 bg-slate-50 rounded-full w-36 h-11">
            <div className="ml-2">
              <Image src="/me/me/images/Star-1.png" alt="" width={25} height={25} />
            </div>
            <h3 className="w-[72px] h-7 text-slate-950 text-lg font-bold">
              لـــــــوگـــــــو
            </h3>
          </div>

          {/* تغییر: w-full در موبایل */}
          <p className="my-4 w-full lg:w-[452px] mb-7 text-zinc-400 text-sm leading-7 text-justify lg:text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که
          </p>

          {/* تغییر: اصلاح عرض فرم خبرنامه */}
          <div className="relative w-full lg:w-96 max-w-md">
            <input
              type="text"
              placeholder="ایمیل شما..."
              className="p-3 bg-white rounded-full w-full border border-zinc-100 outline-none focus:border-green-300"
            />
            <div className="absolute left-1 top-1">
              <button
                type="submit"
                className="py-2 px-4 lg:px-5 bg-green-300 text-[10px] lg:text-xs rounded-full hover:bg-green-400 transition-colors translate-y-1.5 translate-x-1.5"
              >
                عضویت در خبرنامه
              </button>
            </div>
          </div>

          <div className="flex mt-10 lg:mt-20 gap-2 justify-center lg:justify-start">
            {icons.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-100 p-2.5 w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-50 cursor-pointer transition-all"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* بخش دوم: منو و تصاویر */}
      <div className="w-full pb-9 lg:pb-0">
        <div className="px-6 lg:mr-9 mt-8 relative h-full">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-green-300 rounded-full"></div>
            <p className="mr-3 font-medium translate-x-8">منو وب سایت</p>
          </div>

          <div className="mt-7">
            <ul className="flex flex-col gap-5">
              {lis.map((item, index) => (
                <li
                  key={index}
                  className={`${item.className} hover:text-green-500 cursor-pointer transition-colors`}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* بخش تصاویر: در موبایل برای جلوگیری از تداخل مخفی یا جابجا می‌شود */}
          {/* در اینجا برای موبایل مخفی شده و در دسکتاپ نمایش داده می‌شود */}
          <div className="hidden lg:flex flex-col gap-y-4 absolute left-20 bottom-8">
            <img
              src="/me/images/image (1).png"
              alt="img"
              loading="lazy"
              className="w-20"
            />
            <img
              src="/me/images/image 7.png"
              alt="img"
              loading="lazy"
              className="w-20"
            />
          </div>
        </div>
      </div>
    </footer>

    <div className="py-5 text-center text-zinc-400 bg-slate-50 lg:bg-transparent">
      <small className="text-xs">تمام حقوق برای وبسایت محفوظ است.</small>
    </div>
  </>
);

export default footer;
