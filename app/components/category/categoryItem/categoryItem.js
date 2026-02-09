import Image from "next/image";
import Link from "next/link";
import { FiArrowUpLeft, FiPlus } from "react-icons/fi";

const CategoryItem = ({ title, count, src, index }) => (
  <article className="group relative h-[450px] perspective-1000">
    <Link href="#" className="block h-full">
      {/* بدنه اصلی کارت با لبه‌های نرم و متریال بافت‌دار */}
      <div className="relative h-full bg-[#f8f9fa] rounded-[3rem] p-8 border border-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-white group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] group-hover:-translate-y-4">
        {/* شماره دسته‌بندی (شاخص لوکس بودن) */}
        <span className="absolute top-8 left-8 text-xs font-black text-slate-200 group-hover:text-green-200 transition-colors">
          0{index + 1}
        </span>

        {/* محتوای متنی */}
        <div className="mt-6 space-y-2">
          <h3 className="text-2xl font-black text-slate-900 leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
              {count} محصول اختصاصی
            </p>
          </div>
        </div>

        {/* بخش تصویر با قاب شناور */}
        <div className="absolute inset-x-8 bottom-24 h-44 group-hover:bottom-28 transition-all duration-700">
          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)] bg-white">
            <Image
              src={src}
              fill
              loading="lazy"
              alt={title}
              className="object-cover transition-transform duration-1000 scale-110 group-hover:scale-125 group-hover:rotate-3"
            />
            {/* لایه نوری شیشه‌ای روی تصویر */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* دکمه اکشن شناور (Action Button) */}
        <div className="absolute bottom-8 right-8 left-8 flex justify-between items-center">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border-2 border-white bg-pink-200 transition-transform group-hover:translate-x-1" />
            <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-200 transition-transform group-hover:translate-x-1" />
          </div>

          <div className="relative flex items-center justify-center">
            {/* دایره چرخان در پس‌زمینه هوور */}
            <div className="absolute inset-0 bg-green-500 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-10 transition-all duration-700" />
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm border border-slate-50 transition-all duration-500 group-hover:bg-slate-950 group-hover:text-white group-hover:rotate-[135deg]">
              <FiPlus size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  </article>
);

export default CategoryItem;
