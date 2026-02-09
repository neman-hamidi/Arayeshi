"use client";
import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiStar,
  FiPackage,
  FiArrowUpRight,
} from "react-icons/fi";
import { recentPurchases } from "./Text";
const ConciergePanel = () => {
  return (
    <main
      className="min-h-screen bg-[#F8F8F7] pt-32 pb-20 font-[vazir]"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* هدر پنل */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-slate-950 tracking-tighter">
              پنل{" "}
              <span className="font-light italic text-slate-400">
                کانسیرج اختصاصی
              </span>
            </h1>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              جناب مشتری، خوش آمدید
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ستون اصلی */}
          <div className="lg:col-span-2 space-y-10">
            {/* کارت نوبت بعدی (خلاصه شده برای جا شدن بخش خرید) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-950 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6">
                <div>
                  <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-black tracking-widest uppercase mb-4 inline-block">
                    نوبت رزرو شده
                  </div>
                  <h2 className="text-2xl font-black mb-2">
                    فیشیال الماس و خاویار
                  </h2>
                  <p className="text-white/50 text-xs tracking-wide">
                    ۱۸ بهمن • ساعت ۱۶:۳۰ • شعبه فرمانیه
                  </p>
                </div>
                <button className="self-center px-6 py-3 bg-emerald-500 text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all">
                  تغییر زمان
                </button>
              </div>
            </motion.div>

            {/* بخش جدید: خریدهای اخیر (The Boutique History) */}
            <section className="space-y-6">
              <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-black text-slate-950 tracking-tight">
                  خریدهای اخیر{" "}
                  <span className="font-light text-slate-400">از بوتیک</span>
                </h3>
                <button className="text-[10px] font-black text-emerald-600 uppercase tracking-widest border-b border-emerald-600/20">
                  مشاهده همه فاکتورها
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {recentPurchases.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white p-5 rounded-[2.5rem] border border-slate-100 flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-20 h-20 rounded-3xl overflow-hidden bg-slate-50">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-black text-slate-950 text-sm">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-slate-400 font-medium">
                            {item.date}
                          </span>
                          <span className="w-1 h-1 bg-slate-200 rounded-full" />
                          <span className="text-[9px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-left flex items-center gap-6">
                      <div className="hidden md:block">
                        <p className="text-[9px] text-slate-400 font-black uppercase text-left">
                          مبلغ نهایی
                        </p>
                        <p className="font-black text-slate-950 tracking-tighter">
                          {item.price}{" "}
                          <small className="text-[10px] font-medium text-slate-400 uppercase leading-none">
                            تومان
                          </small>
                        </p>
                      </div>
                      <button className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white transition-all">
                        <FiArrowUpRight size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* ستون کناری (همان قبلی) */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 text-center space-y-6"
            >
              <div className="relative inline-block">
                <img
                  src="/images/p24.png"
                  className="w-24 h-24 rounded-full object-cover grayscale"
                  alt="Concierge"
                />
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full" />
              </div>
              <div>
                <h3 className="font-black text-slate-950">هلن آریا</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                  کانسیرج اختصاصی شما
                </p>
              </div>
              <button className="w-full py-5 bg-slate-950 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-900/10">
                <FiMessageSquare /> شروع گفتگو
              </button>
            </motion.div>

            {/* بنر باشگاه وفاداری */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-[3rem] p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <FiStar className="text-white/40" size={30} />
                <h4 className="font-black text-xl leading-tight text-white">
                  شما در سطح طلایی هستید
                </h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  با خرید بعدی خود به ارزش ۱,۲۰۰,۰۰۰ تومان، هدیه ویژه سرم شکوفه
                  گیلاس برای شما آزاد می‌شود.
                </p>
              </div>
              <FiPackage
                className="absolute bottom-[-20px] left-[-20px] text-white/10"
                size={150}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConciergePanel;
