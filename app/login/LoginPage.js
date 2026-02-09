import Link from "next/link"
import {FiCheckCircle,FiLock} from "react-icons/fi"
{/* فیلد رمز عبور و دکمه‌های وابسته */}
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

  {/* ردیف گزینه‌های تکمیلی (مرا به خاطر بسپار و فراموشی رمز) */}
  <div className="flex items-center justify-between px-2">
    <label className="flex items-center gap-2 cursor-pointer group">
      <div className="relative flex items-center">
        <input 
          type="checkbox" 
          className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-md checked:bg-emerald-500 checked:border-emerald-500 transition-all cursor-pointer" 
        />
        <FiCheckCircle className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 right-1 pointer-events-none transition-opacity" />
      </div>
      <span className="text-xs font-bold text-slate-500 group-hover:text-slate-700 transition-colors">
        مرا به خاطر بسپار
      </span>
    </label>

    <Link 
      href="#" 
      className="text-xs font-black text-emerald-600 hover:text-emerald-700 hover:underline underline-offset-4 transition-all"
    >
      فراموشی رمز عبور؟
    </Link>
  </div>
</div>