import Image from "next/image";

export default function BestItem({ title, price, src }) {
  return (
    <div className="group relative w-[332px] h-[350px] p-[15px] bg-white hover:bg-slate-50 border border-slate-100 rounded-[40px] transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60">
      
      {/* نگهدارنده عکس با برش خاص */}
      <div className="overflow-hidden rounded-t-[30px] rounded-b-[10px] rounded-br-[80px] h-[200px]">
        <Image
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          width={301}
          height={198}
        />
      </div>

      <div className="px-2">
        <h3 className="text-gray-800 font-bold text-base mt-4 mb-1 transition-colors group-hover:text-green-600">
          {title}
        </h3>
        <p className="text-[11px] font-medium tracking-wider text-zinc-400 uppercase">Miseico Premium</p>
        
        <div className="flex justify-between mt-4 items-center">
          <div>
            <span className="text-xl font-black text-gray-900">{price}</span>
            <span className="text-[10px] text-zinc-500 mr-1">هزار تومان</span>
          </div>

          {/* دکمه خرید با استایل متفاوت */}
          <button className="relative flex items-center justify-center w-10 h-10 bg-black text-white rounded-2xl overflow-hidden transition-all duration-300 group-hover:bg-green-500 group-hover:rounded-full active:scale-90">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* یک المان تزیینی کوچک برای گوشه کارت */}
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        پیشنهاد ویژه
      </div>
    </div>
  );
}