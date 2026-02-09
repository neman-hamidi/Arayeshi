import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const CommentCard = ({ name, title, src, delay, star }) => (
  <div
    className="reveal-item group relative bg-white rounded-[3rem] p-8 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-slate-50 flex flex-col justify-between min-h-[320px]"
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* آیکون نقل قول تزئینی با اصلاح نام */}
    <div className="absolute top-8 left-8 text-slate-50 group-hover:text-green-50 transition-colors duration-500">
      <FaQuoteRight size={40} />
    </div>

    <div className="relative z-10 text-right" dir="rtl">
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-4 ring-slate-50">
          <Image
            src={src}
            fill
            alt={name}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-black text-slate-900 text-lg">{name}</h4>
          <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest mt-1">
            {title}
          </p>
        </div>
      </div>

      <p className="text-slate-500 leading-[1.9] text-sm text-justify font-medium">
        تجربه خرید من از این مجموعه فراتر از انتظار بود. کیفیت محصولات کاملاً
        اصل بوده و بسته‌بندی بسیار لوکسی داشت. پیشنهاد می‌کنم حتماً یکبار امتحان
        کنید.
      </p>
    </div>

    <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-50">
      <div className="flex gap-1">
        {[...Array(star)].map((i, index) => (
          <FiStar
            key={index}
            size={14}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <span className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">
        تایید شده
      </span>
    </div>
  </div>
);

export default CommentCard;
