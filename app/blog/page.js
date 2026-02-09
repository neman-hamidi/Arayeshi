"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FiArrowLeft,
  FiClock,
  FiMail,
  FiSearch,
  FiArrowUpRight,
} from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    title: "هنر انتخاب عطر بر اساس شخصیت و فصل",
    excerpt:
      "رایحه‌ها فراتر از یک بوی ساده هستند؛ آن‌ها امضای نامرئی شما در فضا محسوب می‌شوند...",
    category: "عطر و ادکلن",
    date: "۱۴ اردیبهشت",
    readTime: "۶ دقیقه",
    image: "/images/p2.png",
    featured: true,
  },
  {
    id: 2,
    title: "راهنمای جامع روتین پوستی در شب",
    excerpt:
      "چرا بازسازی پوست در شب مهم‌تر از روز است؟ بررسی محصولات کلیدی لاین ...",
    category: "مراقبت پوست",
    readTime: "10 دقیقه",
    date: "۱۰ اردیبهشت",
    image: "/images/p2.png",
    featured: false,
  },
  {
    id: 3,
    title: "ترندهای آرایشی ۲۰۲۴: بازگشت به طبیعی بودن",
    excerpt:
      "امسال دنیای مد به سمت آرایش‌های «No-Makeup» حرکت کرده است. چگونه این استایل را بسازیم؟",
    category: "آرایشی",
    readTime: "8 دقیقه",
    date: "۰۸ اردیبهشت",
    image: "/images/p3.png",
    featured: false,
  },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("همه");

  return (
    <main className="min-h-screen bg-[#f8f8f8] pb-20 font-[vazir]" dir="rtl">
      {/* --- هدر داینامیک و ریسپانسیو --- */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/40 via-transparent to-transparent -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-[10px] md:text-xs font-black text-emerald-600 uppercase tracking-[0.5em] mb-6 animate-fade-in">
            Luxe Digital Journal
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter mb-8 leading-tight">
            مجله{" "}
            <span className="font-light italic text-slate-300">
              زیبایی و مد
            </span>
          </h1>

          {/* اسکرول افقی دسته‌بندی‌ها در موبایل */}
          <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            {["همه", "مراقبت پوست", "آرایشی", "عطر", "سبک زندگی"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === cat ? "bg-slate-950 text-white shadow-xl scale-105" : "bg-slate-50 text-slate-400 hover:bg-slate-100"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-20">
        {/* --- مقاله اصلی (Hero Post) --- */}
        {blogPosts
          .filter((p) => p.featured)
          .map((post) => (
            <div
              key={post.id}
              className="group relative mb-20 md:mb-32 cursor-pointer"
            >
              <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl">
                <Image
                  src={post.image}
                  fill
                  alt={post.title}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                <div className="absolute bottom-8 right-8 left-8 md:bottom-16 md:right-16 md:left-16 text-right">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                      ویژه
                    </span>
                    <span className="text-white/60 text-[10px] font-bold">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-5xl font-black text-white mb-6 leading-tight max-w-4xl group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="hidden md:block text-slate-300 text-sm max-w-2xl mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest border-b border-emerald-500/50 pb-1 w-fit">
                    مطالعه مقاله <FiArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* --- گرید مقالات (Grid Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {blogPosts
            .filter((p) => !p.featured)
            .map((post) => (
              <article key={post.id} className="group flex flex-col gap-6">
                <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-slate-100">
                  <Image
                    src={post.image}
                    fill
                    loading="lazy"
                    alt={post.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white p-4 rounded-full shadow-2xl">
                      <FiArrowUpRight className="text-slate-950" size={20} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                      <FiClock /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-950 leading-snug group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
        </div>

        {/* --- بخش خبرنامه مدرن (Subscription) --- */}
        <section className="mt-32 md:mt-48 mb-20">
          <div className="bg-slate-950 rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-right space-y-6">
                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em]">
                  Be the first to know
                </span>
                <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                  عضویت در <br />{" "}
                  <span className="text-slate-500">خبرنامه خبره</span>
                </h2>
                <p className="text-slate-400 text-sm md:text-base font-medium max-w-md">
                  ما فقط محتوای ارزشمند ارسال می‌کنیم؛ ترندهای روز، کدهای تخفیف
                  و نقد تخصصی محصولات.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative group">
                  <FiMail className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                  <input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] py-5 md:py-7 pr-16 pl-6 text-white text-sm focus:bg-white/10 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
                <button className="bg-white text-slate-950 py-5 md:py-7 rounded-[1.5rem] md:rounded-[2rem] font-black text-xs md:text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-xl active:scale-95">
                  تایید و عضویت
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* استایل کمکی برای حذف اسکرول‌بار در دسته‌بندی‌ها */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
};

export default BlogPage;
