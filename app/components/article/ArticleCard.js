import Image from "next/image";
import { FiClock, FiArrowUpLeft } from "react-icons/fi";

const ArticleCard = ({ title, desc, src, date, delay }) => (
  <article
    className="reveal-item group flex flex-col bg-white rounded-[2.5rem] overflow-hidden transition-all duration-1000"
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* بخش تصویر با افکت زوم نرم */}
    <div className="relative h-[300px] w-full overflow-hidden rounded-[2.5rem] shadow-sm">
      <Image
        src={src}
        alt={title}
        loading="lazy"
        fill
        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
      />
      {/* بج زمان مطالعه (Glassmorphism) */}
      <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-2xl text-white">
        <FiClock size={14} />
        <span className="text-[10px] font-black tracking-tighter">
          ۵ دقیقه مطالعه
        </span>
      </div>
    </div>

    {/* محتوای متنی */}
    <div className="pt-8 pb-4 px-2" dir="rtl">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">
          {date}
        </span>
        <div className="h-[1px] flex-1 bg-slate-100"></div>
      </div>

      <h3 className="text-2xl font-black text-slate-950 mb-4 leading-tight group-hover:text-green-600 transition-colors">
        {title}
      </h3>

      <p className="text-slate-500 leading-[1.8] text-sm font-medium mb-6 line-clamp-3">
        {desc}
      </p>

      {/* دکمه ادامه مطلب لوکس */}
      <button className="flex items-center gap-3 text-xs font-black text-slate-900 group-hover:gap-5 transition-all">
        <span>ادامه مقاله تخصصی</span>
        <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all">
          <FiArrowUpLeft size={18} />
        </div>
      </button>
    </div>
  </article>
);

export default ArticleCard;
