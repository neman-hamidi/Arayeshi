"use client";
import Image from "next/image";
import Link from "next/link";
import { icons, lis } from "./Text";
import { FiSend, FiShield, FiArrowLeft } from "react-icons/fi";

const Footer = () => (
  <footer
    className="bg-[#050505] text-white pt-24 pb-12 overflow-hidden"
    dir="rtl"
  >
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      {/* بخش اصلی گرید */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-b border-white/5 pb-20">
        {/* ستون ۱: برندینگ و خبرنامه */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter italic">
              Sevin
            </h2>
            <p className="text-slate-400 leading-8 text-sm max-w-sm font-light">
              پیشرو در ارائه محصولات پریمیوم مراقبتی. ما استانداردهای زیبایی را
              برای کسانی که به دنبال کمال هستند، بازتعریف می‌کنیم.
            </p>
          </div>

          <div className="relative max-w-md group">
            <input
              type="email"
              placeholder="عضویت در خبرنامه ویژه..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pr-6 pl-16 outline-none focus:border-green-400 transition-all text-sm placeholder:text-slate-600"
            />
            <button className="absolute left-2 top-2 bottom-2 bg-green-400 text-black px-5 rounded-xl hover:bg-white transition-all duration-500 flex items-center justify-center">
              <FiSend size={20} />
            </button>
          </div>
        </div>

        {/* ستون ۲: لینک‌های مفید */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] font-black text-green-400 uppercase tracking-[0.4em] mb-10">
            صفحات
          </h4>
          <ul className="grid grid-cols-1 gap-6">
            {lis.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-6 h-[1px] bg-green-400 transition-all duration-500"></span>
                  <span className="text-sm font-bold uppercase">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ستون ۳: نمادهای اعتماد و ای‌نماد (بخش لوکس) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-8">
          <div className="flex items-center gap-3 text-white/40 mb-2">
            <FiShield size={16} />
            <span className="text-[10px] font-black tracking-widest uppercase">
              Trusted & Verified
            </span>
          </div>

          <div className="flex gap-4">
            {/* باکس نماد اعتماد ۱ */}
            <div className="group relative w-32 h-32 bg-white/5 border border-white/10 rounded-[2.5rem] flex items-center justify-center backdrop-blur-xl transition-all duration-700 hover:border-green-400/50 hover:bg-green-400/[0.02]">
              <div className="absolute inset-0 bg-green-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/images/image 7.png" // جایگزین موقت عکس ای‌نماد
                width={70}
                height={70}
                loading="lazy"
                alt="Enamad"
                className="relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* باکس نماد اعتماد ۲ */}
            <div className="group relative w-32 h-32 bg-white/5 border border-white/10 rounded-[2.5rem] flex items-center justify-center backdrop-blur-xl transition-all duration-700 hover:border-blue-400/50 hover:bg-blue-400/[0.02]">
              <div className="absolute inset-0 bg-blue-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/images/zarinpal.png" // جایگزین موقت عکس زرین پال
                width={90}
                height={120}
                loading="lazy"
                alt="Enamad"
                className="relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {icons.map((item, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all duration-700"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* فوتر پایینی: متون حقوقی */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] font-medium text-slate-600 tracking-[0.2em] uppercase">
          Sevin Cosmetics Group © 2026
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3 text-[10px] font-black text-green-400 hover:text-white transition-colors"
        >
          <span>بازگشت به بالا</span>
          <div className="w-8 h-8 rounded-full border border-green-400/30 flex items-center justify-center group-hover:bg-green-400 group-hover:text-black transition-all">
            <FiArrowLeft className="rotate-90" />
          </div>
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
