"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import ArticleCard from "./ArticleCard";
import { FiArrowUpLeft } from "react-icons/fi";
import { articles } from "./text";

export default function ArticleSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current.querySelectorAll(".reveal-item");
    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section ref={sectionRef} className="max-w-[1440px] mx-auto my-40 px-6 lg:px-12">
      {/* هدر بخش: استایل مگزین اروپایی */}
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-6" dir="rtl">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-green-500"></span>
            <span className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase">Beauty Magazine</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
             دانستنی‌های <br />
             <span className="font-light italic text-slate-400  decoration-green-300 ">تخصصی پوست</span>
          </h2>
        </div>

        <Link
          href="/blog"
          className="group relative px-10 py-5 bg-slate-950 text-white rounded-[2rem] font-bold text-sm overflow-hidden flex items-center gap-4 hover:shadow-2xl transition-all"
        >
          <span className="relative z-10">ورود به مجله لوکس‌باکس</span>
          <FiArrowUpLeft className="relative z-10 group-hover:-translate-x-2 transition-transform" size={20} />
          <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </Link>
      </header>

      {/* گرید مقالات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {articles.map((art, index) => (
          <ArticleCard key={index} {...art} delay={index * 200} />
        ))}
      </div>
    </section>
  );
}