import Image from "next/image";
import {
  FiArrowLeft,
  FiStar,
  FiShield,
  FiPlay,
  FiCheckCircle,
} from "react-icons/fi";

const Header = () => {
  const brands = [
    { fa: "اوردینری", en: "THE ORDINARY" },
    { fa: "شیگلم", en: "SHEGLAM" },
    { fa: "ویکتوریا سیکرت", en: "VICTORIA'S" },
    { fa: "سرا-وِ", en: "CERAVE" },
    { fa: "لانکوم", en: "LANCÔME" },
  ];

  return (
    <header className="relative w-full max-w-[1536px] mx-auto px-4 lg:px-10 mt-24 lg:mt-28">
      <div className="relative overflow-hidden bg-white rounded-[2.5rem] lg:rounded-[4rem] border border-slate-50 flex flex-col lg:grid lg:grid-cols-12 items-center p-6 lg:p-0 min-h-fit lg:min-h-[850px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]">
        {/* پس‌زمینه نوری (مخفی در موبایل برای سرعت لود) */}
        <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none hidden lg:block">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-rose-50/60 rounded-full blur-[130px]" />
        </div>

        {/* --- بخش تصویر: در موبایل اول نمایش داده می‌شود (Order 1) --- */}
        <section className="relative lg:col-span-6 w-full flex items-center justify-center order-1 lg:order-2 py-10 lg:py-0">
          <div className="relative animate-float-slow">
            {/* تصویر اصلی محصول - سایز ریسپانسیو */}
            <div className="relative w-[280px] sm:w-[350px] lg:w-[520px] h-[380px] sm:h-[450px] lg:h-[680px] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl ring-1 ring-slate-100">
              <Image
                src="/images/body.jpg"
                fill
                alt="Luxury Cosmetics"
                className="object-cover"
                priority
              />
            </div>

            {/* کارت رضایت مشتری - بهینه برای موبایل */}
            <div className="absolute -top-6 -left-4 lg:-left-24 z-30 bg-white/90 backdrop-blur-xl p-3 lg:p-6 rounded-[1.5rem] lg:rounded-[2.8rem] shadow-xl border border-white flex items-center gap-3 lg:gap-5">
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-amber-400 rounded-xl lg:rounded-2xl flex items-center justify-center text-white">
                <FiStar fill="currentColor" size={18} className="lg:size-6" />
              </div>
              <div>
                <p className="text-xs lg:text-base font-black text-slate-950 italic">
                  ۴.۹ / ۵
                </p>
                <p className="text-[8px] lg:text-[10px] text-slate-500 font-bold uppercase tracking-tighter lg:tracking-widest">
                  تایید مشتریان
                </p>
              </div>
            </div>

            {/* کارت ویژگی - بهینه برای موبایل */}
            <div className="absolute -bottom-6 -right-2 lg:-right-16 z-30 w-[180px] lg:w-[320px] bg-slate-950/95 backdrop-blur-xl p-4 lg:p-8 rounded-[2rem] lg:rounded-[3.5rem] shadow-2xl">
              <div className="flex justify-between items-center mb-3 lg:mb-6">
                <FiShield className="text-emerald-400 size-5 lg:size-6" />
                <span className="text-[7px] lg:text-[9px] font-black text-slate-500 uppercase tracking-widest">
                  Premium
                </span>
              </div>
              <p className="text-[10px] lg:text-sm font-medium text-slate-300 leading-relaxed">
                فرمولاسیون{" "}
                <span className="text-white font-black italic">
                  Black Label
                </span>{" "}
                شارژ شد.
              </p>
            </div>
          </div>
        </section>

        {/* --- بخش متن: در موبایل بعد از تصویر می‌آید (Order 2) --- */}
        <section
          className="relative z-20 lg:col-span-6 px-4 sm:px-10 lg:px-24 pb-12 lg:py-0 text-center lg:text-right order-2 lg:order-1"
          dir="rtl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full mb-6 lg:mb-10 border border-emerald-100/50">
            <FiCheckCircle className="text-emerald-600 size-3 lg:size-4" />
            <span className="text-[9px] lg:text-[10px] font-black text-emerald-700 uppercase">
              ضمانت ۱۰۰٪ اصالت کالا
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[5.5rem] leading-[1.2] lg:leading-[1.1] font-black text-slate-950">
            هنر{" "}
            <span className="text-emerald-500 italic font-light">مراقبت</span>{" "}
            <br className="hidden lg:block" />
            <span className="relative inline-block mt-2">
              از زیبایی شما
              <div className="absolute -bottom-1 lg:-bottom-3 right-0 w-full h-2 lg:h-4 bg-emerald-200/30 -rotate-1 -z-10" />
            </span>
          </h1>

          <p className="mt-6 lg:mt-8 text-slate-500 text-sm lg:text-xl leading-[1.8] lg:leading-[2] max-w-xl mx-auto lg:mr-0 font-medium">
            مجموعه‌ای برگزیده از کمیاب‌ترین محصولات مراقبتی جهان برای درخشش
            بی‌پایان پوست شما.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8">
            <button className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-slate-950 text-white rounded-xl lg:rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-all shadow-lg active:scale-95">
              <span className="flex items-center justify-center gap-3">
                مشاهده کلکسیون <FiArrowLeft />
              </span>
            </button>

            <button className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all">
                <FiPlay fill="currentColor" size={14} />
              </div>
              <span className="text-xs lg:text-sm font-black text-slate-900">
                ویدیو معرفی
              </span>
            </button>
          </div>

          {/* برند بار ریسپانسیو */}
          {/* --- بخش برندها با استایل High-End --- */}
          <div className="mt-16 lg:mt-24 pt-10 border-t border-slate-100/80 relative">
            {/* تگ ظریف در بالای بخش */}
            <div className="absolute top-0 right-0 -translate-y-1/2 bg-white px-4">
              <p className="text-[9px] lg:text-[11px] font-black text-emerald-600 uppercase tracking-[0.4em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Official Distributors
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-8 gap-x-10 lg:gap-x-4">
              {brands.map((brand, i) => (
                <div key={i} className="group relative">
                  <div className="relative flex flex-col items-center lg:items-start transition-all duration-500">
                    {/* نام انگلیسی برند - کوچک و لوکس */}
                    <span className="text-[7px] lg:text-[9px] font-bold text-slate-400 tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 uppercase">
                      {brand.en}
                    </span>

                    {/* نام فارسی با استایل تایپوگرافی خاص */}
                    <div className="relative">
                      <span className="text-lg lg:text-xl font-black text-slate-400 group-hover:text-slate-900 transition-colors duration-500 ease-in-out cursor-default">
                        {brand.fa}
                      </span>

                      {/* خط زیرین هوشمند */}
                      <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>

                  {/* المان جداکننده دکوراتیو (فقط برای دسکتاپ بین آیتم‌ها) */}
                  {i !== brands.length - 1 && (
                    <div className="hidden xl:block absolute -left-8 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-slate-100 rotate-[25deg]" />
                  )}
                </div>
              ))}
            </div>

            {/* افکت نوری بسیار ملایم زیر برندها */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-emerald-50/30 blur-[60px] -z-10" />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
