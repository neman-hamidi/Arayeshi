"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { AboutDesc } from "./text";
import { FiEye, FiTarget, FiArrowUpRight, FiCompass } from "react-icons/fi";

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // پارالاکس برای المان‌های مختلف
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#FDFBF9] pb-40 pt-32 font-[vazir] overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ۱. هدر هنری با انیمیشن ورود */}
        <section className="relative mb-60">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col gap-2 relative z-10"
          >
            <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.8em] mb-4 block">
              Crafting Excellence
            </span>
            <h1 className="text-[14vw] font-black text-slate-950 leading-[0.7] tracking-tighter">
              میراث <br />{" "}
              <span className="font-light italic text-slate-300 ml-4">
                بی‌زمان
              </span>
            </h1>
          </motion.div>

          <motion.div
            style={{ y: yText }}
            className="absolute left-0 bottom-[-50px] max-w-sm hidden lg:block border-r-4 border-emerald-500 pr-8"
          >
            <p className="text-lg text-slate-500 leading-loose font-medium italic">
              در دنیایی که همه چیز زودگذر است، ما به دنبال خلق لحظاتی هستیم که
              هرگز رنگ نمی‌بازند.{" "}
            </p>
          </motion.div>
        </section>

        {/* ۲. بخش پارالاکس ترکیبی (Vision) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-60 items-center relative">
          <div className="lg:col-span-7 relative group">
            <motion.div
              style={{ y: yImage }}
              className="relative h-[800px] w-full rounded-[15rem] overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,0.4)]"
            >
              <Image
                src="/images/p1.png"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                alt="Luxury Concept"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
            </motion.div>

            {/* کارت‌های پارالاکس شناور */}
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              className="absolute -bottom-16 -left-12 bg-white/80 backdrop-blur-2xl p-12 rounded-[5rem] shadow-2xl max-w-xs hidden md:block border border-white/40"
            >
              <div className="w-16 h-16 bg-slate-950 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                <FiCompass size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-950">
                مسیر روشن
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">
                هدایت شما به سمت انتخاب‌هایی که هویت شما را بازتاب می‌دهند.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-24 lg:pr-16">
            <motion.div
              whileInView={{ opacity: [0, 1], x: [50, 0] }}
              className="space-y-6 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[2rem] bg-[#F1ECE7] flex items-center justify-center text-slate-950 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner">
                  <FiEye size={28} />
                </div>
                <h2 className="text-3xl font-black text-slate-950 tracking-tighter uppercase">
                  چشم‌انداز
                </h2>
              </div>
              <p className="text-slate-500 leading-[2.4] font-medium text-xl">
                ما به دنبال بازتعریف مفهوم{" "}
                <span className="text-slate-950 font-black underline decoration-emerald-300">
                  شکوه
                </span>{" "}
                هستیم؛ جایی که سادگی و کیفیت در هم می‌آمیزند.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1], x: [50, 0] }}
              className="space-y-6 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[2rem] bg-slate-950 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-2xl">
                  <FiTarget size={28} />
                </div>
                <h2 className="text-3xl font-black text-slate-950 tracking-tighter uppercase">
                  ماموریت
                </h2>
              </div>
              <p className="text-slate-600 leading-[2.2] font-light text-lg">
                رسالت ما، فراهم‌آوری دسترسی بی‌واسطه به شاهکارهای جهانی است. ما
                پلی میان هنر بی‌مرز و سلیقه سخت‌گیر شما هستیم.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ۳. بخش آیکون‌های استراتژیک (Values) */}
        <section className="mb-60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {AboutDesc.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -20 }}
                className={`p-12 bg-white rounded-[4rem] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-6 ${item.hover} transition-colors duration-700`}
              >
                <div className="text-emerald-500 text-5xl mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-slate-950 uppercase tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400 font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ۴. نقشه با استایل Dark-Luxury */}
        <section className="relative h-[700px] rounded-[5rem] overflow-hidden shadow-3xl group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.581849141019!2d51.4217!3d35.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ3JzI0LjAiTiA1McKwMjUnMTguMSJF!5e0!3m2!1sen!2s!4v1625500000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(1) invert(0.9) contrast(1.5)",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* کارت شناور روی نقشه */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute top-12 right-12 bg-slate-950 p-12 rounded-[4rem] text-white max-w-md shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">
                Main Boutique
              </span>
            </div>
            <h3 className="text-3xl font-black mb-6 leading-tight">
              در قلب <br /> جردن و الهیه
            </h3>
            <p className="text-slate-400 text-sm leading-loose font-light mb-10">
              تهران، خیابان فرشته، مرکز خرید سام سنتر، طبقه اول، واحد بوتیک
              مرکزی.
            </p>
            <button className="group flex items-center gap-4 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
              دریافت مسیریابی{" "}
              <FiArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition-transform"
              />
            </button>
          </motion.div>
        </section>
      </div>

      {/* استایل دکوراتیو پس‌زمینه برای عمق دادن به پارالاکس */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <div className="absolute top-[10%] right-[-5%] w-96 h-96 bg-emerald-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-200/20 blur-[150px] rounded-full" />
      </div>
    </main>
  );
};

export default AboutPage;
