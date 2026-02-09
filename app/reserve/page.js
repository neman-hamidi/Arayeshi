"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "./Text";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiCheckCircle,
  FiChevronLeft,
} from "react-icons/fi";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main
      className="min-h-screen bg-[#FBFBFA] pt-20 md:pt-32 pb-20 md:pb-40 font-[vazir] relative overflow-x-hidden"
      dir="rtl"
    >
      {/* المان‌های تزئینی پس‌زمینه */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-50/50 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        {/* هدر */}
        <header className="text-center mb-12 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]"
          >
            ✦ VIP Skin & Body Care
          </motion.div>
          <h1 className="text-3xl md:text-7xl font-black text-slate-950 tracking-tighter leading-tight">
            رزرو <br className="md:hidden" />{" "}
            <span className="font-light italic text-slate-300">
              نوبت اختصاصی
            </span>
          </h1>
        </header>

        {/* محتوای رزرو */}
        <motion.div
          layout
          className={`bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-slate-50 relative transition-all duration-500 ${
            open ? "pt-12 md:pt-20 pb-6 md:pb-10 px-6 md:px-8" : "p-6 md:p-16"
          }`}
        >
          <AnimatePresence mode="wait">
            {/* مرحله ۱: نام */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="space-y-2 text-center md:text-right">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                    خوش آمدید،
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm">
                    لطفاً برای یک تجربه شخصی‌سازی شده، نام خود را وارد کنید.
                  </p>
                </div>
                <div className="relative">
                  <FiUser className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 text-slate-300 text-xl md:text-2xl" />
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی شما..."
                    className="w-full bg-slate-50 p-6 md:p-10 pr-16 md:pr-20 rounded-[1.8rem] md:rounded-[3rem] text-lg md:text-xl font-bold outline-none focus:ring-4 ring-emerald-500/5 transition-all border-none placeholder:text-slate-200"
                    onChange={(e) =>
                      setBookingData({ ...bookingData, name: e.target.value })
                    }
                  />
                </div>
                <button
                  disabled={bookingData.name.length < 3}
                  onClick={nextStep}
                  className="w-full py-6 md:py-8 bg-slate-950 text-white rounded-[1.5rem] md:rounded-[2.5rem] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-emerald-600 disabled:opacity-20 transition-all shadow-xl"
                >
                  تایید و مشاهده منوی خدمات
                </button>
              </motion.div>
            )}

            {/* مرحله ۲: انتخاب سرویس */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                className="space-y-6 md:space-y-8"
              >
                <h2 className="text-xl md:text-2xl font-black text-slate-950 mb-6 md:mb-10 text-center md:text-right leading-tight">
                  {bookingData.name} عزیز، خدمت مورد نظر را انتخاب کنید:
                </h2>
                <div className="grid grid-cols-1 gap-4 md:gap-5 overflow-y-auto max-h-[50vh] md:max-h-full pr-1">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setBookingData({
                          ...bookingData,
                          service: service.title,
                        });
                        nextStep();
                      }}
                      className={`group flex items-center justify-between p-4 md:p-8 rounded-[1.8rem] md:rounded-[3rem] border-2 transition-all duration-300 ${
                        bookingData.service === service.title
                          ? "border-emerald-500 bg-emerald-50/20 shadow-md"
                          : "border-slate-50 hover:border-slate-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl md:text-3xl text-slate-300 group-hover:text-emerald-500 group-hover:bg-white transition-all">
                          {service.icon}
                        </div>
                        <div className="text-right">
                          <p className="font-black text-slate-950 text-sm md:text-base">
                            {service.title}
                          </p>
                          <p className="text-[9px] text-emerald-600 font-bold uppercase mt-1 tracking-wider">
                            {service.duration}
                          </p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-black text-slate-950 text-sm md:text-base tracking-tighter">
                          {service.price}
                        </p>
                        <p className="text-[8px] md:text-[10px] text-slate-400 font-medium">
                          تومان
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={prevStep}
                  className="text-[9px] md:text-xs font-black text-slate-300 flex items-center gap-2 mx-auto uppercase tracking-widest hover:text-slate-950 transition-colors pt-4"
                >
                  <FiChevronLeft size={16} /> مرحله قبل
                </button>
              </motion.div>
            )}

            {/* مرحله ۳: زمان */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8 md:space-y-10"
              >
                <h2 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight text-center">
                  زمان حضور در کلینیک
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3 md:space-y-4">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-400 flex items-center gap-2 uppercase tracking-[0.2em]">
                      <FiCalendar className="text-emerald-500" /> تقویم شمسی
                    </label>
                    <DatePicker
                      calendar={persian}
                      locale={persian_fa}
                      onOpen={() => setOpen(true)}
                      onClose={() => setOpen(false)}
                      calendarPosition="bottom-center"
                      inputClass="w-full p-6 md:p-8 bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] outline-none focus:ring-4 ring-emerald-500/5 font-bold text-slate-900 border-none text-center text-base md:text-lg"
                      containerStyle={{ width: "100%" }}
                      onChange={(date) =>
                        setBookingData({
                          ...bookingData,
                          date: date?.format?.("YYYY/MM/DD"),
                        })
                      }
                      placeholder="روز حضور..."
                    />
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-400 flex items-center gap-2 uppercase tracking-[0.2em]">
                      <FiClock className="text-emerald-500" /> انتخاب ساعت
                    </label>
                    <div className="relative">
                      <select
                        className="w-full p-6 md:p-8 bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] outline-none focus:ring-4 ring-emerald-500/5 font-bold appearance-none border-none text-center text-base md:text-lg cursor-pointer"
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            time: e.target.value,
                          })
                        }
                      >
                        <option>ساعت...</option>
                        <option>۱۰:۰۰ صبح</option>
                        <option>۱۵:۳۰ بعد از ظهر</option>
                        <option>۱۹:۰۰ عصر</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 pt-6 md:pt-10">
                  <button
                    onClick={prevStep}
                    className="w-full md:flex-1 py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-[9px] md:text-[10px] border border-slate-100 uppercase tracking-widest hover:bg-slate-50 transition-all order-2 md:order-1"
                  >
                    مرحله قبل
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!bookingData.date || !bookingData.time}
                    className="w-full md:flex-[2] py-5 md:py-6 bg-slate-950 text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-emerald-600 disabled:opacity-20 transition-all shadow-xl order-1 md:order-2"
                  >
                    تایید نهایی نوبت رزرو
                  </button>
                </div>
              </motion.div>
            )}

            {/* مرحله ۴: تایید نهایی */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-8 md:space-y-10 py-6 md:py-10"
              >
                <div className="relative inline-block">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-4xl md:text-5xl shadow-xl">
                    <FiCheckCircle />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-emerald-500 rounded-full"
                  />
                </div>
                <div className="space-y-3 px-2">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tighter">
                    درخواست شما ثبت شد
                  </h2>
                  <p className="text-slate-400 font-medium italic text-sm md:text-lg leading-relaxed whitespace-pre-line px-4">
                    {`
  ${bookingData.name} عزیز، مشتاق دیدار شما هستیم.
  پیامک رزرو به طور خودکار برای شما ارسال می‌شود.
  `}
                  </p>
                </div>

                <div className="w-full max-w-md mx-auto bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 text-right space-y-4 md:space-y-6 text-sm md:text-base">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                    <span className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                      سرویس:
                    </span>
                    <span className="text-slate-950 font-black">
                      {bookingData.service}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-right">
                      زمان:
                    </span>
                    <span className="text-slate-950 font-black tracking-tighter text-left">
                      {bookingData.date} - {bookingData.time}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => window.location.reload()}
                  className="w-full md:w-auto px-12 py-5 md:py-6 bg-slate-950 text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] hover:bg-emerald-600 transition-all"
                >
                  بازگشت به خانه
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
};

export default BookingPage;
