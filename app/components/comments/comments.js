"use client";
import { useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiMessageCircle } from "react-icons/fi";
import Image from "next/image";
import CommentCard from "./CommentCard";
import { motion } from "framer-motion";
import { FiTag } from "react-icons/fi";
import { commentsUser } from "./text";

const Comments = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            entry.target.classList.add("reveal-visible"),
        );
      },
      { threshold: 0.1 },
    );
    sectionRef.current
      .querySelectorAll(".reveal-item")
      .forEach((item) => observer.observe(item));
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-[1440px] mx-auto my-40 px-6 lg:px-12"
      dir="rtl"
    >
      {/* هدر بخش با ناوبری هوشمند */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div className="space-y-4 text-right">
          <div className="flex items-center gap-3">
            <FiMessageCircle className="text-green-500" size={24} />
            <span className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-950">
            صدای{" "}
            <span className="font-light italic text-slate-400">مشتریان</span> ما
          </h2>
        </div>

        <div className="flex gap-4">
          <button className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all duration-500 shadow-sm group">
            <FiArrowRight
              size={24}
              className="group-active:scale-75 transition-transform"
            />
          </button>
          <button className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-slate-950 transition-all duration-500 shadow-xl shadow-green-100 group">
            <FiArrowLeft
              size={24}
              className="group-active:scale-75 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* گرید کارت‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {commentsUser.map((user, index) => (
          <CommentCard key={index} {...user} delay={index * 150} />
        ))}
      </div>

      {/* بنر تخفیف مدرن با تکنیک Masking */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-44 h-[550px] lg:h-[650px] rounded-[4.5rem] overflow-hidden group shadow-[0_60px_100px_-30px_rgba(0,0,0,0.3)]"
      >
        <Image
          src="/images/p14.png"
          fill
          className="object-cover transition-transform duration-[12s] ease-out group-hover:scale-110"
          loading="lazy"
          alt="Sevin Discount"
        />

        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent z-10" />

        <div className="absolute top-10 left-10 text-[18rem] font-black text-white/[0.04] leading-none select-none pointer-events-none z-10 hidden lg:block uppercase tracking-tighter">
          Exclusive
        </div>

        <div
          className="absolute inset-0 z-20 flex flex-col justify-center px-10 lg:px-28 items-start text-right"
          dir="rtl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-6 py-3 rounded-full mb-10 tracking-[0.2em] uppercase"
          >
            <FiTag className="text-emerald-400" />
            <span>امتیاز عضویت ویژه</span>
          </motion.div>

          <h3 className="text-white text-5xl lg:text-8xl font-black mb-8 leading-[1.1]">
            درخشش را <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-100 italic font-light">
              هدیه بگیرید
            </span>
          </h3>

          <div className="max-w-md space-y-10">
            <p className="text-slate-300 text-lg lg:text-xl leading-relaxed font-light">
              راز زیبایی در تداوم است. با کد اختصاصی زیر، این مسیر را با امتیازی
              ویژه آغاز کنید.
            </p>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-2.5 rounded-3xl w-fit group/code">
              <span className="text-white font-mono text-3xl px-8 tracking-[0.2em]">
                LUXE2026
              </span>
              <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-4 rounded-2xl text-xs transition-colors">
                کپی کد
              </button>
            </div>
          </div>

          <button className="mt-14 group relative overflow-hidden bg-white text-slate-950 px-16 py-6 rounded-2xl font-black text-sm transition-all duration-700 hover:pr-24 shadow-2xl">
            <span className="relative z-10">شروع تجربه خرید</span>
            <FiArrowLeft
              className="absolute left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:left-8 transition-all duration-700 text-emerald-600 z-30"
              size={24}
            />
            <div className="absolute inset-0 bg-emerald-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Comments;
