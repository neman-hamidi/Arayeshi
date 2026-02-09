"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTrash2, FiArrowUpRight, FiLock, FiStar } from "react-icons/fi";
import Link from "next/link";

import { initialVault } from "./Text";

const VaultPage = () => {
  const [items, setItems] = useState(initialVault);

  return (
    <main
      className="min-h-screen bg-[#0A0A0A] text-[#F5F5F7] pt-24 md:pt-32 pb-20 md:pb-40 font-[vazir] overflow-x-hidden"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* هدر ریسپانسیو */}
        <header className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="space-y-3 md:space-y-4 text-center md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center md:justify-start gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-emerald-500"
            >
              <FiLock /> Private Vault
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-tight md:leading-none">
              خزانه <br className="hidden md:block" />{" "}
              <span className="font-thin italic text-slate-600 tracking-normal">
                انتخاب‌های شما
              </span>
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center md:text-left border-t border-white/5 pt-6 md:pt-0 md:border-none"
          >
            <p className="text-slate-500 text-xs md:text-sm font-medium mb-1">
              مجموع ارزش انتخاب‌های شما
            </p>
            <p className="text-2xl md:text-3xl font-light tracking-tighter text-emerald-50">
              ۱۱,۷۰۰,۰۰۰ <small className="text-[10px] md:text-xs">تومان</small>
            </p>
          </motion.div>
        </header>

        <AnimatePresence mode="popLayout">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                    />

                    {/* Overlay گرادینت */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* محتوای روی کارت */}
                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[8px] md:text-[9px] font-black tracking-widest uppercase text-white/90">
                          ID: {item.code}
                        </span>
                        <button
                          onClick={() =>
                            setItems(items.filter((i) => i.id !== item.id))
                          }
                          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white/40 hover:text-red-400 hover:bg-white/10 transition-all outline-none"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>

                      <div className="space-y-3 md:space-y-4">
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight group-hover:translate-x-[-5px] md:group-hover:translate-x-[-10px] transition-transform duration-500">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-lg md:text-xl font-light text-emerald-400">
                            {item.price}{" "}
                            <small className="text-[10px]">تومان</small>
                          </p>
                          <Link href="/booking">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                            >
                              {/* سایز را با کلاس Tailwind کنترل می‌کنیم نه با Props مستقیم */}
                              <FiArrowUpRight className="text-[20px] md:text-[24px]" />
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 md:py-40 text-center border border-dashed border-white/10 rounded-[2.5rem] md:rounded-[4rem] px-6"
            >
              <FiStar className="mx-auto text-emerald-500/20 text-5xl md:text-6xl mb-6 animate-pulse" />
              <p className="text-slate-500 font-light tracking-widest uppercase text-[10px] md:text-xs">
                خزانه فعلاً خالی است
              </p>
              <Link href="/services">
                <button className="mt-8 text-white border-b border-emerald-500 pb-2 font-black text-sm hover:text-emerald-500 transition-all">
                  مشاهده کالکشن ۲۰۲۶
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* بخش پیشنهاد ویژه ریسپانسیو */}
        {items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-32 p-[1px] bg-gradient-to-r from-emerald-500/20 via-slate-800/20 to-transparent rounded-[2rem] md:rounded-[3rem]"
          >
            <div className="bg-[#0D0D0D] p-8 md:p-20 rounded-[1.9rem] md:rounded-[2.9rem] flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
              <div className="space-y-3 text-center lg:text-right">
                <h4 className="text-xl md:text-2xl font-black">
                  پکیج سفارشی برای شما
                </h4>
                <p className="text-slate-400 text-xs md:text-sm max-w-md leading-relaxed">
                  بر اساس انتخاب‌های شما، مشاورین ما پکیج ویژه‌ای با ۱۵٪ تخفیف
                  برای رزرو یکجای این خدمات آماده کرده‌اند.
                </p>
              </div>
              <button className="w-full lg:w-auto whitespace-nowrap px-8 md:px-12 py-5 md:py-6 bg-emerald-500 text-black rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] active:scale-95 transition-all shadow-[0_15px_30px_rgba(16,185,129,0.2)]">
                رزرو هوشمند کل لیست
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default VaultPage;
