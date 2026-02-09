"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiLock,
  FiArrowRight,
  FiCheckCircle,
  FiCheck,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#fcfcfc] p-4 lg:p-0 font-[vazir] my-24 lg:my-28">
      <div className="w-full max-w-[1200px] min-h-[720px] bg-white rounded-[3rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
        {/* بخش فرم ورود */}
        <section
          className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center order-2 lg:order-1"
          dir="rtl"
        >
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-950 mb-3 tracking-tighter">
              خوش آمدید
            </h2>
            <p className="text-slate-400 text-sm mb-10 font-medium">
              لطفاً برای دسترسی به پنل خود وارد شوید.
            </p>

            <form className="space-y-6">
              {/* ایمیل */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">
                  ایمیل شما
                </label>
                <div className="relative group">
                  <FiMail className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pr-14 pl-6 outline-none focus:bg-white focus:ring-4 ring-emerald-500/5 transition-all text-sm"
                  />
                </div>
              </div>

              {/* رمز عبور */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">
                    رمز عبور
                  </label>
                  <div className="relative group">
                    <FiLock className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pr-14 pl-6 outline-none focus:bg-white focus:ring-4 ring-emerald-500/5 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* مرا به خاطر بسپار و فراموشی رمز */}
                <div className="flex items-center justify-between px-1">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-md checked:bg-emerald-500 checked:border-emerald-500 transition-all cursor-pointer"
                      />
                      <FiCheck className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 right-0.5 pointer-events-none transition-opacity" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
                      مرا به خاطر بسپار
                    </span>
                  </label>
                  <Link
                    href="#"
                    className="text-[11px] font-black text-emerald-600 hover:text-emerald-700"
                  >
                    فراموشی رمز عبور؟
                  </Link>
                </div>
              </div>

              <button className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black text-sm hover:bg-emerald-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                ورود به حساب <FiArrowRight className="rotate-180" />
              </button>
            </form>

            <div className="mt-8">
              <div className="relative flex items-center justify-center mb-8">
                <div className="w-full h-[1px] bg-slate-100"></div>
                <span className="absolute bg-white px-4 text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                  یا ورود با
                </span>
              </div>
              <button className="w-full border border-slate-100 py-4 rounded-2xl flex items-center justify-center gap-3 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all active:scale-95">
                <FcGoogle size={20} /> گوگل
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-slate-400 font-medium">
              عضو نیستید؟{" "}
              <Link
                href="/register"
                className="text-slate-900 font-black hover:text-emerald-600 transition-colors"
              >
                ایجاد حساب
              </Link>
            </p>
          </div>
        </section>

        {/* بخش ویژوال دسکتاپ */}
        <section className="hidden lg:flex w-1/2 bg-slate-950 relative items-center justify-center p-20 order-1 lg:order-2">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 overflow-hidden">
            <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10 text-center space-y-8">
            <div className="relative w-72 h-72 mx-auto animate-float-slow">
              <Image
                src="/images/piclogin.png"
                fill
                className="object-cover rounded-[4rem] shadow-2xl rotate-3"
                loading="lazy"
                alt="Luxury"
              />
            </div>
            <h2 className="text-white text-3xl font-black tracking-tighter">
              Sevin
            </h2>
            <div className="flex items-center justify-center gap-4 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase">
              <span className="flex items-center gap-2">
                <FiCheckCircle /> Originality
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle /> Quality
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
