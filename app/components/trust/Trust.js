"use client";
import { motion } from "framer-motion";
import { FiEye, FiZap, FiBox, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const ArcaneStandards = () => {
  const features = [
    {
      id: "01",
      title: "اصالت بی‌چون‌وچرا",
      en: "UNDENIABLE PROVENANCE",
      desc: "هر بطری، داستانی از خاستگاه خالص خود دارد؛ اصالتی که قابل ردیابی و تضمین است.",
      icon: <FiEye />,
      mainImage:
        "/images/p21.jpg",
      gradient: "from-emerald-400/30 to-blue-500/30",
    },
    {
      id: "02",
      title: "مهندسی مولکولی",
      en: "MOLECULAR CRAFTSMANSHIP",
      desc: "فرمولاسیون‌هایی که در دل پیشرفته‌ترین آزمایشگاه‌ها، با دقیق‌ترین ترکیبات خلق شده‌اند.",
      icon: <FiZap />,
      mainImage:
        "/images/p22.jpg",
      gradient: "from-purple-400/30 to-pink-500/30",
    },
    {
      id: "03",
      title: "کادوی بی‌مانند",
      en: "THE ART OF GIVING",
      desc: "تجربه‌ای لوکس از بسته‌بندی نفیس، آماده برای هدیه دادن به خاص‌ترین افراد.",
      icon: <FiBox />,
      mainImage:
        "/images/p23.jpg",
      gradient: "from-orange-400/30 to-red-500/30",
    },
  ];

  // انیمیشن‌های والد برای مدیریت ترتیب ظهور
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.8, delayChildren: 0.3 },
    },
  };

  // انیمیشن برای هر کارت یا المان تکی
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative max-w-[1600px] mx-auto py-32 lg:py-52 px-6 lg:px-16 overflow-hidden bg-gradient-to-br from-white to-slate-50"
      dir="rtl"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a0a0a0' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Header with Reveal */}
      <motion.div
        variants={revealVariants}
        className="mb-24 lg:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end relative z-10"
      >
        <div className="relative">
          <span className="text-sm font-black tracking-[0.8em] text-emerald-700 uppercase mb-6 block">
            THE ARCANE STANDARDS
          </span>
          <h2 className="text-6xl lg:text-9xl font-extrabold text-slate-950 leading-none lg:leading-[0.9]">
            فراتر از <br />
            <span className="relative inline-block mt-4">
              کمال
              <span className="absolute -bottom-2 right-0 w-full h-4 bg-emerald-200/50 -rotate-2 -z-10" />
            </span>
          </h2>
          <p className="max-w-xl text-lg lg:text-xl text-slate-600 leading-relaxed mt-10 font-medium">
            ما هر محصول را نه یک کالا، که یک **تجربه منحصر به فرد** می‌دانیم.
          </p>
        </div>

        <div className="flex flex-col items-start lg:items-end text-right">
          <p className="max-w-md text-slate-500 text-sm italic border-r-2 border-slate-300 pr-6">
            زیبایی حقیقی در جزئیات پنهان است؛ و ما استاد آشکارسازی آنیم.
          </p>
          <button className="mt-12 flex items-center gap-4 text-slate-900 font-bold group">
            مطالعه تاریخچه برند
            <FiArrowRight
              className="group-hover:translate-x-2 transition-transform"
              size={20}
            />
          </button>
        </div>
      </motion.div>

      {/* Grid Cards with Staggered Reveal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        {features.map((card, i) => (
          <motion.div
            key={i}
            variants={revealVariants}
            className="group relative h-[700px] lg:h-[800px] rounded-[4.5rem] overflow-hidden shadow-2xl transition-all duration-1000 hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)] hover:-translate-y-4"
          >
            {/* Main Product Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={card.mainImage}
                alt={card.title}
                loading="lazy"
                fill
                className="object-cover object-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
              />
            </div>

            <div
              className={`absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90`}
            />

            {/* Content Layer */}
            <div className="relative z-20 h-full p-12 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <span className="text-7xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors tracking-tight">
                  {card.id}
                </span>
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white text-3xl group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-500">
                  {card.icon}
                </div>
              </div>

              <div className="transform translate-y-16 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <p className="text-[10px] font-black tracking-[0.6em] text-emerald-400 mb-4 uppercase">
                  {card.en}
                </p>
                <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                  {card.desc}
                </p>

                <button className="mt-10 pointer-events-auto flex items-center gap-4 text-white font-bold text-sm bg-white/15 w-fit px-7 py-4 rounded-full backdrop-blur-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 hover:bg-emerald-600">
                  کشف جزئیات <FiArrowRight className="-rotate-45" />
                </button>
              </div>
            </div>

            <div
              className={`absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r ${card.gradient} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ArcaneStandards;
