"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiUser,
  FiArrowLeft,
} from "react-icons/fi";
import { navLinks } from "./text";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 flex justify-center px-3 transition-all duration-700 ease-in-out ${isScrolled ? "mt-2" : "mt-6"}`}
    >
      <div
        className={`relative flex items-center justify-between w-full max-w-[1400px] h-16 sm:h-20 px-4 rounded-[2rem] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) border ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-white/40 shadow-2xl"
            : "bg-white/20 backdrop-blur-md border-white/20 shadow-none"
        }`}
      >
        {/* --- بخش راست: لوگو و جستجو --- */}
        <div className="flex items-center gap-3 flex-1 h-full">
          <div
            className={`transition-all duration-500 ease-in-out ${isSearchActive ? "opacity-0 -translate-x-5 invisible w-0" : "opacity-100 translate-x-0 visible w-auto"}`}
          >
            <Link
              href="/"
              className="bg-slate-950 text-white p-3 rounded-2xl flex items-center hover:rotate-0 rotate-3 transition-transform duration-500"
            >
              <span className="text-[10px] font-black tracking-tighter">
                LUXE
              </span>
            </Link>
          </div>

          <div
            className={`relative flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSearchActive ? "w-full max-w-[260px] opacity-100" : "w-10 opacity-100"}`}
          >
            <button
              onClick={() => setIsSearchActive(true)}
              className={`p-3 bg-slate-100/50 hover:bg-white rounded-2xl transition-all duration-500 ${isSearchActive ? "opacity-0 scale-0 absolute" : "opacity-100 scale-100"}`}
            >
              <FiSearch size={18} className="text-slate-700" />
            </button>

            <div
              className={`flex items-center bg-white rounded-2xl px-3 w-full transition-all duration-500 ${isSearchActive ? "opacity-100 translate-x-0 h-11" : "opacity-0 -translate-x-4 h-0 pointer-events-none"}`}
            >
              <FiSearch className="text-slate-400" size={16} />
              <input
                type="text"
                placeholder="جستجو..."
                className="bg-transparent border-none outline-none w-full text-xs px-2"
                onBlur={() => setIsSearchActive(false)}
              />
              <FiX
                className="cursor-pointer text-slate-400"
                onClick={() => setIsSearchActive(false)}
              />
            </div>
          </div>
        </div>

        {/* --- بخش وسط: لینک‌ها --- */}
        <div
          className={`hidden lg:flex items-center justify-center bg-slate-100/30 backdrop-blur-sm rounded-2xl px-2 py-1 border border-white/50 transition-all duration-700 ${isSearchActive ? "opacity-0 scale-90 blur-md pointer-events-none" : "opacity-100 scale-100"}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 py-2 text-[13px] font-bold text-slate-600 hover:text-slate-950 transition-all hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- بخش چپ: دکمه‌ها --- */}
        <div className="flex items-center justify-end gap-2 flex-1">
          <div
            className={`hidden md:flex items-center gap-2 transition-all duration-500 ${isSearchActive ? "opacity-0 translate-x-5 invisible w-0" : "opacity-100 translate-x-0"}`}
          >
            <Link
              href="/login"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/50 border border-slate-200 text-[11px] font-black text-slate-700 hover:bg-slate-950 hover:text-white transition-all duration-500"
            >
              ورود
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/50 border border-slate-200 text-[11px] font-black text-slate-700 hover:bg-green-500 hover:text-white transition-all duration-500"
            >
              عضویت
            </Link>
          </div>

          <Link
            href="/cart"
            className="relative p-3 bg-slate-950 text-white rounded-2xl hover:scale-110 active:scale-90 transition-all"
          >
            <FiShoppingBag size={18} />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-3 bg-white border border-slate-100 rounded-2xl active:scale-90 transition-transform"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </div>

      {/* --- منوی موبایل با سیستم خروج نرم (Smooth Exit) --- */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-700 ease-in-out ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* پس‌زمینه تیره که به آرامی محو می‌شود */}
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-700 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* بدنه منو که به آرامی از سمت راست خارج/وارد می‌شود */}
        <div
          className={`absolute right-4 top-4 bottom-4 w-[260px] bg-white rounded-[2.5rem] p-8 shadow-2xl transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${
            isMobileMenuOpen
              ? "translate-x-0 rotate-0"
              : "translate-x-[120%] rotate-12"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-12">
              <span className="font-black text-slate-400 text-[10px] tracking-[0.3em]">
                NAVIGATE
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-slate-50 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-8 text-right" dir="rtl">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${i * 100}ms` : "0ms",
                  }}
                  className={`text-base font-black text-slate-800 flex items-center justify-between group transition-all duration-500 ${
                    isMobileMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  {link.name}
                  <FiArrowLeft className="text-slate-200 group-hover:text-green-500 group-hover:-translate-x-2 transition-all" />
                </Link>
              ))}
            </div>

            <div
              className={`mt-auto transition-all duration-700 delay-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Link
                href="/login"
                className="flex items-center justify-center gap-3 w-full py-5 bg-slate-950 text-white rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
              >
                ورود به حساب <FiUser />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
