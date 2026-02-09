"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiUser,
  FiPhone,
  FiLock,
  FiArrowLeft,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const SignUpPage = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    // فقط عدد مجاز باشد
    if (isNaN(value)) return;

    const newCode = [...code];
    newCode[index] = value.substring(value.length - 1);
    setCode(newCode);

    // حرکت به فیلد بعدی اگر مقدار وارد شده باشد
    if (value && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // بازگشت به فیلد قبلی با Backspace
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#fcfcfc] p-4 lg:p-0 font-[vazir] my-24 lg:my-28">
      {/* کارت اصلی */}
      <div className="w-full max-w-[1250px] min-h-[750px] bg-white rounded-[3rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
        {/* --- بخش اول: فرم ثبت نام (سمت راست در RTL) --- */}
        <section
          className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center order-2 lg:order-1"
          dir="rtl"
        >
          <div className="max-w-md mx-auto w-full">
            {step === 1 ? (
              <div className="animate-reveal show">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-950 mb-3 tracking-tighter">
                  ایجاد حساب
                </h2>
                <p className="text-slate-400 text-sm mb-10 font-medium">
                  به کلاب مشتریان وفادار ما بپیوندید.
                </p>

                <form className="space-y-5">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2 group-focus-within:text-emerald-500 transition-colors">
                      نام و نام خانوادگی
                    </label>
                    <div className="relative">
                      <FiUser className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
                      <input
                        type="text"
                        placeholder="مثلاً: آرشام مرادی"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pr-14 pl-6 outline-none focus:bg-white focus:ring-4 ring-emerald-500/5 transition-all text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">
                      تلفن همراه
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
                      <input
                        type="tel"
                        placeholder="0912XXXXXXX"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pr-14 pl-6 outline-none focus:bg-white focus:ring-4 ring-emerald-500/5 transition-all text-sm font-black tracking-[0.2em]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">
                      رمز عبور
                    </label>
                    <div className="relative">
                      <FiLock className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pr-14 pl-6 outline-none focus:bg-white focus:ring-4 ring-emerald-500/5 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black text-sm hover:bg-emerald-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                  >
                    تایید شماره موبایل <FiArrowLeft className="rotate-180" />
                  </button>
                </form>
              </div>
            ) : (
              /* مرحله تایید کد OTP */
              <div className="animate-reveal show text-center lg:text-right max-w-md mx-auto p-4">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                    <FiShield size={28} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-950 tracking-tighter">
                    تأیید هویت
                  </h2>
                </div>

                <p className="text-slate-400 text-sm mb-10 font-medium leading-relaxed">
                  کد ۵ رقمی ارسال شده به شماره خود را وارد نمایید.
                </p>

                {/* بخش اینپوت‌ها */}
                <div
                  className="flex gap-2 sm:gap-3 mb-10 justify-between lg:justify-start"
                  dir="ltr"
                >
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputs.current[index] = el)}
                      type="text"
                      inputMode="numeric" // برای باز شدن کیبورد عددی در موبایل
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full h-16 sm:w-14 bg-slate-50 border-2 border-slate-100 rounded-2xl text-center text-xl font-black focus:border-emerald-500 focus:bg-white outline-none transition-all"
                    />
                  ))}
                </div>

                <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-sm hover:bg-emerald-700 transition-all shadow-xl active:scale-95 mb-6">
                  تکمیل عضویت
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-950"
                >
                  ویرایش اطلاعات
                </button>
              </div>
            )}

            <p className="mt-10 text-center text-sm text-slate-400 font-medium border-t border-slate-50 pt-8">
              قبلاً ثبت‌نام کرده‌اید؟{" "}
              <Link
                href="/login"
                className="text-slate-900 font-black hover:text-emerald-600 transition-colors"
              >
                وارد شوید
              </Link>
            </p>
          </div>
        </section>

        {/* --- بخش دوم: ویژوال محصول (سمت چپ - مشابه لاگین) --- */}
        <section className="hidden lg:flex w-1/2 bg-slate-950 relative items-center justify-center p-20 order-1 lg:order-2">
          {/* افکت نوری پس‌زمینه (این بار بنفش/صورتی ملایم برای تنوع در ثبت‌نام) */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 overflow-hidden">
            <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-rose-500 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 text-center space-y-8">
            {/* تصویر محصول شناور */}
            <div className="relative w-80 h-80 mx-auto animate-float-slow">
              <Image
                src="/images/p20.png"
                fill
                className="object-cover rounded-[4rem] shadow-2xl -rotate-3 border-4 border-white/10"
                loading="lazy"
                alt="Product Showcase"
              />

              {/* بج شناور روی عکس */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl p-4 rounded-3xl border border-white/20 shadow-2xl">
                <p className="text-white text-[10px] font-black uppercase tracking-widest">
                  Premium Member
                </p>
                <p className="text-emerald-400 text-xs font-bold mt-1">
                  Special Discounts
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-white text-3xl font-black tracking-[0.2em] uppercase">
                Join The Elite
              </h2>
              <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                با عضویت در سوین، زودتر از بقیه محصولات لیمیتد-ادیشن مطلع شوید.
              </p>
              <div className="flex items-center justify-center gap-4 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase pt-4">
                <span className="flex items-center gap-2">
                  {" "}
                  Free Delivery <FiCheckCircle />
                </span>
                <span className="flex items-center gap-2">
                  {" "}
                  Priority Care <FiCheckCircle />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 text-slate-500 text-[9px] font-black uppercase tracking-[0.4em]">
            Sevin Community © 2026
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUpPage;
