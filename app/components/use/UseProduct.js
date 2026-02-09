"use client";
import { motion } from "framer-motion";
import { FiPlus, FiArrowUpLeft } from "react-icons/fi";

const LuxuryRoutine = () => {
  const steps = [
    {
      id: "01",
      title: "پاک‌سازی عمیق",
      desc: "شروع درخشش با شوینده‌های حاوی ذرات طلا",
      image: "/images/piclogin.png",
    },
    {
      id: "02",
      title: "تغذیه سلولی",
      desc: "سرم‌های غنی شده با ویتامین C خالص",
      image: "/images/skin.jpg", // تصویر جایگزین پایدار
    },
  ];

  // انیمیشن کلی کانتینر
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  // انیمیشن متن‌ها (ظهور نرم از راست)
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // انیمیشن تصاویر (ظهور با اسکیل و زوم)
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="max-w-[1440px] mx-auto my-40 px-6 lg:px-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* بخش متن و محتوا */}
        <motion.div className="lg:col-span-5 order-2 lg:order-1" dir="rtl">
          <div className="space-y-8">
            <motion.span variants={textVariants} className="inline-block text-emerald-600 font-black tracking-[.3em] text-[10px] uppercase bg-emerald-50 px-4 py-2 rounded-full">
              The Daily Ritual
            </motion.span>

            <motion.h2 variants={textVariants} className="text-4xl lg:text-6xl font-light text-slate-900 leading-tight">
              روتینِ <span className="font-black">اصیل</span> <br />
              برای پوستی بی‌نقص
            </motion.h2>

            <motion.p variants={textVariants} className="text-slate-500 text-lg leading-relaxed font-medium">
              ما در بیوتی لند معتقدیم زیبایی تصادفی نیست. این روتین ۳ مرحله‌ای،
              حاصل سال‌ها تحقیق بر روی ژنتیک پوست است.
            </motion.p>

            <div className="space-y-6 pt-6">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  variants={textVariants}
                  className="group cursor-pointer flex items-center gap-6 p-4 rounded-3xl hover:bg-slate-50 transition-all duration-500"
                >
                  <span className="text-3xl font-light text-slate-200 group-hover:text-emerald-500 transition-colors">
                    {step.id}
                  </span>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">{step.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{step.desc}</p>
                  </div>
                  <FiPlus className="mr-auto text-slate-300 group-hover:rotate-90 group-hover:text-emerald-500 transition-all" />
                </motion.div>
              ))}
            </div>

            <motion.button variants={textVariants} className="mt-10 group flex items-center gap-6 text-slate-950 font-black text-lg">
              <span className="underline underline-offset-8 decoration-1 decoration-slate-300 group-hover:decoration-emerald-500 transition-all">
                مطالعه کامل راهنمای روتین
              </span>
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <FiArrowUpLeft size={20} />
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* بخش تصویر دوتایی نامتقارن */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative h-[500px] lg:h-[700px]">
          {/* تصویر بزرگ پشت */}
          <motion.div 
            variants={imageVariants}
            className="absolute top-0 right-0 w-2/3 h-[80%] rounded-[3rem] overflow-hidden shadow-2xl z-10"
          >
            <img
              src={steps[0].image}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              alt="Step 1"
            />
          </motion.div>

          {/* تصویر کوچک جلو با تاخیر بیشتر */}
          <motion.div 
            variants={imageVariants}
            transition={{ delay: 0.4 }}
            className="absolute bottom-0 left-0 w-1/2 h-[60%] rounded-[3rem] overflow-hidden shadow-3xl border-[12px] border-white z-20"
          >
            <img
              src={steps[1].image}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              alt="Step 2"
            />
          </motion.div>

          {/* دایره دکوراتیو با انیمیشن چرخش ملایم */}
          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-slate-200 rounded-full -z-10" 
          />
        </div>
      </div>
    </motion.section>
  );
};

export default LuxuryRoutine;