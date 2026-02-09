import Image from "next/image";
import { FiShoppingBag, FiPlus, FiArrowUpRight } from "react-icons/fi";

export default function BestItem({ title, price, src, delay, brand }) {
  return (
    <div
      className="reveal-item group relative w-full bg-white rounded-[2.5rem] lg:rounded-[3.5rem] p-3 lg:p-4 transition-all duration-1000 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-transparent hover:border-slate-100"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Container تصویر: ارتفاع کمتر در موبایل برای جلوگیری از اسکرول زیاد */}
      <div className="relative h-[240px] sm:h-[280px] lg:h-[320px] w-full overflow-hidden rounded-[2rem] lg:rounded-[2.8rem] bg-[#f8f8f8]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1.5s] lg:duration-[2s] group-hover:scale-110"
          loading="lazy"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* دکمه افزودن سریع (همیشه در موبایل در دسترس، در دسکتاپ با هوور) */}
        <div className="absolute inset-0 bg-black/20 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center text-black">
            <FiPlus size={20} />
          </button>
        </div>

        {/* بج قیمت: کوچک‌تر و شیک‌تر در موبایل */}
        <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-2xl text-white">
          <span className="text-black/70 font-black text-[10px] lg:text-sm">
            {price}
          </span>
          <span className="text-[8px] text-black/70 mr-0.5 font-light tracking-tighter">
            تومان
          </span>
        </div>
      </div>

      {/* بخش اطلاعات */}
      <div className="mt-5 lg:mt-8 px-2 lg:px-4 pb-2 text-right">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[8px] lg:text-[10px] font-black text-slate-400 tracking-widest uppercase">
            {brand}
          </span>
          <FiArrowUpRight className="text-slate-300 group-hover:text-green-500 transition-colors" />
        </div>

        <h3 className="text-base lg:text-2xl font-bold lg:font-light text-slate-900 group-hover:text-green-600 transition-all duration-300 leading-tight">
          {title}
        </h3>

        <div className="mt-6 lg:mt-8 flex items-center justify-between">
          {/* انتخاب رنگ‌های مینیمال */}
          <div className="flex -space-x-1.5 lg:-space-x-2">
            <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full border-2 border-white bg-rose-200 shadow-sm" />
            <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full border-2 border-white bg-amber-100 shadow-sm" />
          </div>

          <button className="flex items-center gap-1.5 lg:gap-2 text-[10px] lg:text-xs font-black text-slate-950">
            <span className="hidden sm:inline">مشاهده کالا</span>
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-slate-50 group-hover:bg-green-50 rounded-full flex items-center justify-center transition-all">
              <FiShoppingBag size={14} className="group-hover:text-green-600" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
