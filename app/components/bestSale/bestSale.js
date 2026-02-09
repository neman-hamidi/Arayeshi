"use client";
import { useEffect, useRef } from "react";
import { btns, details } from "./Text";
import BestItem from "./bestItem/bestItem";

const BestSale = () => {
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
    <section ref={sectionRef} className="max-w-[1440px] mx-auto my-20 lg:my-40 px-4 lg:px-12" dir="rtl">
      
      {/* هدر بخش: بهینه برای موبایل */}
      <div className="flex flex-col items-center mb-16 lg:mb-24 text-center">
        <h2 className="text-4xl lg:text-8xl font-black text-slate-950 mb-4 lg:mb-6 tracking-tighter">
          TRENDING <span className="font-light italic text-slate-300">NOW</span>
        </h2>
        <p className="text-slate-400 max-w-lg leading-relaxed text-xs lg:text-base px-4">
          منتخبی از درخشان‌ترین محصولات که در شبکه‌های اجتماعی ترند شده‌اند.
        </p>
        
        {/* فیلتر بار: اسکرول افقی در موبایل */}
        <div className="mt-8 lg:mt-12 w-full overflow-x-auto no-scrollbar pb-4 lg:pb-0">
          <div className="flex justify-start lg:justify-center gap-2 min-w-max px-4">
            {btns.map((btn, i) => (
              <button key={i} className={`px-6 lg:px-8 py-2.5 lg:py-3 rounded-[2rem] text-[10px] lg:text-xs font-bold transition-all ${i === 0 ? "bg-slate-950 text-white shadow-xl" : "bg-slate-50 text-slate-400 hover:text-black border border-slate-100"}`}>
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* گرید محصولات: در موبایل ۲ ستونه و در دسکتاپ ۴ ستونه */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-10 lg:gap-y-16">
        {details.map((item, index) => (
          <BestItem key={index} {...item} delay={index * 100} />
        ))}
      </div>
    </section>
  );
};

export default BestSale;