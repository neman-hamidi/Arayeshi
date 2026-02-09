"use client";
import { useState } from "react";
import {
  FiLock,
  FiCheck,
  FiChevronLeft,
  FiCreditCard,
  FiShield,
} from "react-icons/fi";

const FormInput = ({ label, placeholder, type = "text" }) => (
  <div className="group flex flex-col gap-3">
    <label className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em] group-focus-within:text-slate-950 transition-colors">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-sm font-bold outline-none focus:border-slate-950 transition-all placeholder:text-slate-300"
    />
  </div>
);

const StepIndicator = ({ step, label, status }) => (
  <div className="flex flex-col items-center gap-2 bg-[#F9F8F6] px-4 z-10">
    <div
      className={`w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-500 shadow-sm ${
        status === "active"
          ? "bg-slate-950 text-white scale-110 shadow-lg"
          : status === "complete"
            ? "bg-emerald-500 text-white"
            : "bg-white text-slate-200 border border-slate-100"
      }`}
    >
      {status === "complete" ? <FiCheck size={14} /> : step}
    </div>
    <span
      className={`text-[9px] font-black uppercase tracking-widest ${status === "active" ? "text-slate-950" : "text-slate-300"}`}
    >
      {label}
    </span>
  </div>
);

// --- کامپوننت اصلی ---

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("online");

  return (
    <main
      className="min-h-screen bg-[#F9F8F6] pb-24 font-[vazir] pt-32"
      dir="rtl"
    >
      {/* ۱. نوار وضعیت (غیر چسبنده برای عدم تداخل با نوبار) */}
      <nav className="mb-16 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -z-0"></div>
          <StepIndicator step={1} label="سبد خرید" status="complete" />
          <StepIndicator step={2} label="اطلاعات ارسال" status="active" />
          <StepIndicator step={3} label="پرداخت" status="pending" />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        {/* ۲. فرم‌های اطلاعات مشتری */}
        <div className="flex-[1.4] w-full space-y-16">
          <section>
            <div className="flex items-baseline gap-4 mb-12">
              <h2 className="text-4xl font-black text-slate-950 tracking-tighter">
                جزئیات{" "}
                <span className="font-light italic text-slate-400">ارسال</span>
              </h2>
              <div className="h-[1px] flex-1 bg-slate-100"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              <FormInput label="نام تحویل‌گیرنده" placeholder="Arash Rad" />
              <FormInput
                label="شماره تماس"
                placeholder="0912 000 0000"
                type="tel"
              />
              <FormInput label="استان و شهر" placeholder="تهران، جردن" />
              <FormInput label="کد پستی" placeholder="1234567890" />
              <div className="md:col-span-2">
                <FormInput
                  label="آدرس کامل"
                  placeholder="خیابان، کوچه، پلاک، واحد..."
                />
              </div>
            </div>
          </section>

          <section className="pt-8">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
              متد پرداخت را انتخاب کنید
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* گزینه پرداخت آنلاین */}
              <button
                onClick={() => setPaymentMethod("online")}
                className={`p-8 rounded-[2.5rem] border-2 text-right transition-all duration-500 flex flex-col gap-4 ${
                  paymentMethod === "online"
                    ? "border-slate-950 bg-white shadow-2xl scale-105"
                    : "border-transparent bg-slate-100 opacity-50 hover:opacity-100"
                }`}
              >
                <FiCreditCard
                  size={24}
                  className={
                    paymentMethod === "online"
                      ? "text-emerald-500"
                      : "text-slate-400"
                  }
                />
                <div>
                  <p className="font-black text-slate-950 uppercase tracking-tighter">
                    پرداخت آنلاین
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    کلیه کارت‌های عضو شتاب
                  </p>
                </div>
              </button>

              {/* گزینه کیف پول */}
              <button
                onClick={() => setPaymentMethod("wallet")}
                className={`p-8 rounded-[2.5rem] border-2 text-right transition-all duration-500 flex flex-col gap-4 ${
                  paymentMethod === "wallet"
                    ? "border-slate-950 bg-white shadow-2xl scale-105"
                    : "border-transparent bg-slate-100 opacity-50 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === "wallet" ? "border-emerald-500" : "border-slate-300"}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${paymentMethod === "wallet" ? "bg-emerald-500" : "bg-transparent"}`}
                  ></div>
                </div>
                <div>
                  <p className="font-black text-slate-950 uppercase tracking-tighter">
                    کیف پول لوکس
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    پرداخت سریع با موجودی حساب
                  </p>
                </div>
              </button>
            </div>
          </section>
        </div>

        {/* ۳. سایدبار خلاصه فاکتور */}
        <aside className="flex-1 w-full lg:sticky lg:top-32">
          <div className="bg-slate-950 rounded-[4rem] p-10 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400 animate-pulse">
                Secure Checkout
              </span>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex justify-between items-center opacity-70 font-light">
                <span>مجموع سبد خرید</span>
                <span>۱۴,۵۰۰,۰۰۰ تومان</span>
              </div>
              <div className="flex justify-between items-center opacity-70 font-light">
                <span>مالیات و عوارض</span>
                <span>۴۵۰,۰۰۰ تومان</span>
              </div>
              <div className="flex justify-between items-center text-emerald-400">
                <span className="font-medium">هزینه تحویل</span>
                <span className="text-[10px] font-black uppercase tracking-widest">
                  رایگان
                </span>
              </div>

              <div className="pt-10 space-y-2 border-t border-white/5">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  مبلغ نهایی
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tighter">
                    ۱۴,۹۵۰,۰۰۰
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase">
                    تومان
                  </span>
                </div>
              </div>

              <button className="w-full bg-white text-slate-950 py-7 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] mt-8 hover:bg-emerald-400 transition-all duration-500 shadow-xl group flex items-center justify-center gap-2">
                ثبت سفارش نهایی
                <FiChevronLeft className="group-hover:-translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/5 pt-10 opacity-40">
              <div className="flex gap-4">
                <FiShield size={20} />
                <FiLock size={20} />
              </div>
              <p className="text-[8px] text-center font-black uppercase tracking-widest">
                Protected by Luxury Encrypted Protocol
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CheckoutPage;
