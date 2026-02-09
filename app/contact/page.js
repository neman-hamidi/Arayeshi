"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiChevronDown,
  FiArrowRight,
  FiVideo,
  FiShield,
  FiClock,
  FiInstagram,
} from "react-icons/fi";

const ContactPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      title: "مشاوره ویدیویی",
      desc: "نمایش زنده محصولات توسط مشاور",
      icon: <FiVideo />,
      color: "bg-blue-500",
    },
    {
      title: "گارانتی بین‌المللی",
      desc: "استعلام اصالت و خدمات پس از فروش",
      icon: <FiShield />,
      color: "bg-emerald-500",
    },
    {
      title: "خدمات کانسیرج",
      desc: "ارسال اختصاصی و رزرو هدایا",
      icon: <FiClock />,
      color: "bg-amber-500",
    },
  ];

  const faqs = [
    {
      q: "فرآیند بازگشت وجه در صورت انصراف چگونه است؟",
      a: "در صورت عدم باز شدن پلمب کالا، وجه واریزی ظرف ۴۸ ساعت کاری به همان حسابی که خرید با آن انجام شده بازگشت داده خواهد شد.",
    },
    {
      q: "آیا امکان ارسال به خارج از کشور وجود دارد؟",
      a: "بله، ما از طریق سرویس‌های اکسپرس بین‌المللی به تمام کشورهای حوزه خلیج فارس و اروپا ارسال مستقیم داریم.",
    },
    {
      q: "چگونه می‌توانم وضعیت سفارش VIP خود را پیگیری کنم؟",
      a: "برای سفارش‌های VIP، یک مدیر حساب اختصاصی به شما اختصاص می‌یابد که به صورت لحظه‌ای از طریق واتس‌اپ پاسخگوی شماست.",
    },
  ];

  return (
    <main
      className="min-h-screen bg-[#F8F7F5] pb-40 pt-32 font-[vazir]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ۱. بخش هدر سینمایی (Hero Section) */}
        <section className="relative h-[450px] rounded-[4rem] overflow-hidden mb-24 group shadow-2xl">
          <Image
            src="/images/w.jpg"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3]"
            loading="lazy"
            alt="Luxury Boutique"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent flex items-center pr-12 md:pr-24">
            <div className="max-w-xl space-y-6">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.6em] block animate-pulse">
                Personalized Service
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                در خدمت <br />{" "}
                <span className="font-light italic text-slate-400">
                  خواسته شما
                </span>
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                تیم کانسیرج ما آماده است تا تجربه‌ای فراتر از یک خرید ساده را
                برای شما رقم بزند. از مشاوره تخصصی تا تحویل درب منزل.
              </p>
            </div>
          </div>
        </section>

        {/* ۲. کارت‌های خدمات سریع (New Feature) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
            >
              <div
                className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform shadow-lg`}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-black text-slate-950 mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center text-[10px] font-black text-slate-950 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                درخواست سرویس <FiArrowRight className="mr-2" />
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* ۳. بخش فرم و شبکه‌های اجتماعی */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-950 tracking-tighter mb-4">
                ارتباط{" "}
                <span className="font-light italic text-slate-400">مستقیم</span>
              </h2>
              <p className="text-sm text-slate-500">
                پاسخگویی در کمتر از ۳۰ دقیقه (ساعات کاری)
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="نام شما"
                  className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-slate-950 transition-all font-bold"
                />
                <input
                  type="text"
                  placeholder="شماره تماس"
                  className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-slate-950 transition-all font-bold"
                />
              </div>
              <textarea
                rows="4"
                placeholder="پیام شما..."
                className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-slate-950 transition-all font-bold resize-none"
              ></textarea>
              <button className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-xl">
                ارسال
              </button>
            </form>

            <div className="flex gap-4 pt-10">
              <div className="p-4 bg-white rounded-2xl border border-slate-100 text-slate-900 hover:bg-slate-950 hover:text-white transition-all cursor-pointer">
                <FiInstagram size={24} />
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-100 text-slate-900 hover:bg-slate-950 hover:text-white transition-all cursor-pointer">
                <FiPhone size={24} />
              </div>
            </div>
          </div>

          {/* ۴. آکاردئون سوالات متداول با استایل مینیمال */}
          <div className="space-y-8">
            <div className="bg-slate-950 rounded-[4rem] p-12 text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-10 tracking-tight">
                سوالات متداول
              </h3>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    className="border-b border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full py-6 flex justify-between items-center text-right group"
                    >
                      <span
                        className={`text-sm font-bold transition-all ${activeFaq === i ? "text-emerald-400" : "text-white/80"}`}
                      >
                        {f.q}
                      </span>
                      <FiChevronDown
                        className={`transition-transform duration-500 ${activeFaq === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out ${activeFaq === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-xs text-slate-400 leading-relaxed font-light">
                        {f.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ۵. کارت نقشه و آدرس (استایل کارت پستال) */}
            <div className="bg-white p-4 rounded-[3rem] shadow-sm border border-slate-50 relative overflow-hidden group">
              <div className="h-64 rounded-[2.5rem] bg-slate-100 relative overflow-hidden mb-6">
                <Image
                  src="/images/p19.png"
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                  alt="Map"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full shadow-2xl animate-bounce">
                    <FiMapPin className="text-red-500" size={24} />
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Flagship Boutique
                </p>
                <p className="text-lg font-black text-slate-950">
                  تهران، الهیه، مجتمع تجاری مدرن الهیه
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
