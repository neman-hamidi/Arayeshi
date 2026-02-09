"use client"; // اگر از Next.js App Router استفاده می‌کنی
import { motion } from "framer-motion";
import details from "./Text";
import CategoryItem from "./categoryItem/CategoryItem";
import { FiChevronLeft } from "react-icons/fi";

const Category = () => {
  // تنظیمات انیمیشن کانتینر برای ایجاد حالت پله‌ای (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // فاصله زمانی بین ظهور هر کارت
      },
    },
  };

  // تنظیمات انیمیشن برای هر بخش (تیتر و کارت‌ها)
  const itemVariants = {
    hidden: { opacity: 0.5, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.42, 1, 0.46, 1] } 
    },
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-130px" }} // انیمیشن فقط یکبار وقتی کاربر به ۱۰۰ پیکسلی بخش رسید اجرا شود
      variants={containerVariants}
      className="max-w-[1440px] mx-auto mt-32 mb-40 px-6 lg:px-12" 
      dir="rtl"
    >
      {/* سرتیتر با انیمیشن ورود */}
      <motion.div 
        variants={itemVariants}
        className="relative flex flex-col md:flex-row items-end justify-between gap-8 mb-20"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-green-500"></span>
            <span className="text-xs font-black tracking-[0.4em] text-slate-400 uppercase">Premium Selection</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-slate-900 leading-[1.1]">
            تجربه‌ای نو از <br />
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              زیبایی بی‌حد و مرز
            </span>
          </h2>
        </div>

        <button className="group flex items-center gap-4 px-8 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition-all duration-500 shadow-sm">
          مشاهده تمام دسته‌ها
          <FiChevronLeft className="group-hover:-translate-x-2 transition-transform" />
        </button>

        <span className="absolute -top-10 -right-10 text-[10rem] font-black text-slate-50 opacity-[0.03] select-none pointer-events-none">
          01
        </span>
      </motion.div>

      {/* گرید کارت‌ها با انیمیشن ظهور مرحله‌ای */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-12"
      >
        {details.map((item, index) => (
          <motion.div key={item.title} variants={itemVariants}>
            <CategoryItem {...item} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Category;