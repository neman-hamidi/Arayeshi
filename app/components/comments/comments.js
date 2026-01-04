import Image from "next/image";
import commentsUser from "./Text";

const comments = () => (
  <section className="px-4 lg:px-0">
    {/* بخش هدر نظرات */}
    <div className="max-w-[1420px] mb-12 mx-auto mt-12">
      <div className="flex w-fit items-center">
        <div className="w-7 h-7 bg-green-300 rounded-full"></div>
        <h3 className="mr-3 font-medium">نظرات شما</h3>
      </div>

      <div className="mt-4 w-full">
        {/* تغییر: استفاده از flex-col در موبایل برای جلوگیری از تداخل متن و دکمه‌ها */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-2xl lg:text-3xl font-extralight leading-tight">
            مشتریان درباره ما چه میگویند؟
          </p>
          {/* دکمه‌های کنترل اسلایدر */}
          <div className="flex gap-2">
            <button className="text-sm py-2 px-6 bg-green-300 rounded-full hover:bg-green-400 transition-colors">
              <svg className="rotate-180 w-6 h-6">
                <use href="#arrow-left"></use>
              </svg>
            </button>
            <button className="text-sm py-2 px-6 bg-green-300 rounded-full hover:bg-green-400 transition-colors">
              <svg className="w-6 h-6">
                <use href="#arrow-left"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* بخش کارت‌های نظرات */}
    {/* تغییر: استفاده از grid کاملا ریسپانسیو و حذف عرض ثابت در موبایل */}
    <div className="max-w-[1420px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
      {commentsUser.map((item, index) => (
        <div
          key={index}
          className="py-6 px-6 bg-slate-50 rounded-[40px] w-full lg:max-w-[434px] min-h-[274px] flex flex-col justify-between border border-transparent hover:border-green-200 transition-all"
        >
          <div>
            <div className="flex items-center gap-3 border-b border-b-zinc-200 pb-4">
              <Image
                src={item.src}
                width={60}
                height={60}
                alt="profile-comment"
                className="rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div>
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-zinc-400 mt-1 text-xs">{item.title}</p>
              </div>
            </div>
            <p className="mt-4 leading-7 text-sm text-zinc-600 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>

          <div className="flex gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* بخش تصویر بنر/تخفیف */}
    <div className="my-20 px-4">
      <img
        src="/me/images/Frame 47.png"
        alt="Discount-img"
        className="mx-auto w-full max-w-[1420px] h-auto object-contain rounded-3xl"
      />
    </div>
  </section>
);

export default comments;
