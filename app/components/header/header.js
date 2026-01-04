import Image from "next/image";
import btns from "./Text";

const header = () => (
  <>
    {/* Header In WebSite */}
    {/* تغییر: h-auto در موبایل برای جلوگیری از بریدگی محتوا و lg:w-[1420px] برای دسکتاپ */}
    <header className="w-[95%] lg:w-[1420px] h-auto lg:h-[757px] mx-auto mt-7 bg-slate-50 rounded-3xl flex flex-col lg:flex-row justify-between items-center p-6 lg:p-0 overflow-hidden">
      {/* بخش متون */}
      <section className="pt-5 lg:pt-11 lg:mr-16 w-full lg:w-auto text-center lg:text-right">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="w-2 h-2 rounded-full bg-green-400 ml-2"></div>
          <p className="font-extralight text-sm lg:text-base">
            محصولات 100% اورجینال
          </p>
        </div>

        {/* تیتر اصلی */}
        <div className="mt-4">
          <p className="font-light text-2xl lg:text-4xl my-2 lg:my-5 leading-tight">
            محصولات آرایشی باکیفیت و ماندگار برای زیبایی
          </p>
          <span className="flex items-center justify-center lg:justify-start flex-wrap gap-2">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <Image
                src="/me/images/image-3.png"
                width={45}
                height={45}
                className="rounded-full border-2 border-white"
                loading="lazy"
                alt="Image Of Product"
              />
              <Image
                src="/me/images/Frame-18.png"
                width={45}
                height={45}
                loading="lazy"
                className="rounded-full border-2 border-white translate-x-2 lg:translate-x-4"
                alt="Image Of Product"
              />
            </div>
            <span className="font-light text-2xl lg:text-4xl mr-4">
              طبیعی شما!
            </span>
          </span>
        </div>

        {/* توضیحات */}
        <div className="my-5 w-full lg:w-[610px] h-auto text-zinc-400">
          <p className="leading-7 lg:leading-8 text-sm lg:text-base px-2 lg:px-0 text-justify lg:text-right">
            " با محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و
            درخششی جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم،
            تجربه‌ای متفاوت از خرید را به شما هدیه می‌دهند. "
          </p>
        </div>

        {/* دکمه فراخوان */}
        <div className="mt-6">
          <button className="py-3 px-10 bg-green-400 rounded-full font-bold hover:bg-green-500 transition-all">
            مشاهده محصولات
          </button>
        </div>

        {/* دکمه‌های تگ */}
        <div className="w-full lg:w-[650px] mt-10 lg:mt-44 flex flex-wrap justify-center lg:justify-start gap-2">
          {btns.map((item, index) => (
            <button
              key={index}
              className="py-2 px-6 border border-zinc-400 rounded-full text-xs lg:text-sm text-zinc-500 hover:bg-zinc-100 transition-colors"
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>

      {/* بخش تصویر اصلی */}
      <div className="mt-12 lg:mt-0 lg:ml-11 w-full lg:w-auto flex justify-center">
        <div className="relative">
          <Image
            src="/me/images/image-header.png"
            width={490}
            height={595}
            alt="header"
            className="w-[300px] lg:w-[490px] h-auto object-contain"
          />

          {/* باکس ویژه - در موبایل کوچک‌تر و در دسکتاپ طبق طرح شما */}
          <div className="w-[160px] lg:w-[200px] h-auto absolute bottom-4 -right-4 lg:-right-32 bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
            <div className="mb-3 lg:mb-5 flex items-center">
              <Image
                src="/me/images/Star-1.png"
                width={20}
                height={20}
                alt="star header"
              />
              <span className="mr-1 text-xs lg:text-sm font-bold">ویژه‌ها</span>
            </div>
            <div className="flex justify-between items-start mb-3">
              <p className="text-[10px] lg:text-xs leading-relaxed">
                محصولات ویژه برند Ordinary
              </p>
              <div className="shrink-0">
                <svg className="w-5 h-5 p-1 bg-green-400 rounded-full text-white">
                  <use href="#arrow-up-left"></use>
                </svg>
              </div>
            </div>
            <div>
              <Image
                src="/me/images/image-header2.png"
                width={178}
                height={100}
                alt="header-2"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default header;
