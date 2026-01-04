import { btns, details } from "./Text";
import BestItem from "./bestItem/bestItem";

const BestSale = () => (
  <div className="max-w-[1420px] mx-auto my-12 px-4 italic-free-font">
    {/* بخش هدر */}
    <div className="flex items-center gap-3 mb-2">
      <div className="w-2 h-8 bg-green-400 rounded-full"></div>{" "}
      {/* نشانگر عمودی مدرن‌تر */}
      <p className="text-zinc-500 font-medium">پرفروش ترین محصولات</p>
    </div>

    <div className="flex justify-between items-end mt-4">
      <div>
        <h3 className="font-bold text-3xl text-slate-800">ترندترین</h3>
        <span className="font-light text-3xl text-slate-500 block mt-1">
          محصولات این هفته
        </span>
      </div>

      {/* دکمه لیست بر اساس */}
      <button className="flex items-center gap-2 text-xs py-2.5 px-6 border border-zinc-200 hover:bg-zinc-50 transition-colors rounded-full text-zinc-600 shadow-sm">
        <svg className="w-5 h-5 opacity-70">
          <use href="#list-bullet"></use>
        </svg>
        <span>
          لیست براساس: <span className="font-bold text-black">همه</span>
        </span>
      </button>
    </div>

    {/* بخش فیلترها/دکمه‌ها */}
    <div className="flex flex-wrap gap-3 mt-8 mb-10">
      {btns.map((item, index) => (
        <button
          key={index}
          className={`py-2.5 px-8 rounded-full text-sm font-medium transition-all duration-300 
            ${
              index === 0
                ? "bg-green-400 text-black shadow-lg shadow-green-200"
                : "bg-white border border-zinc-100 text-zinc-500 hover:border-green-300 hover:text-green-600"
            }`}
        >
          {item}
        </button>
      ))}
    </div>

    {/* نمایش محصولات */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
      {details.map((item, index) => (
        <BestItem key={index} {...item} />
      ))}
    </div>

    {/* بنر پایین */}
    <div className="mt-20 overflow-hidden rounded-[3rem] shadow-xl">
      <img
        src="/me/images/svg.png"
        className="h-32 w-full object-cover"
        alt="footer banner"
      />
    </div>
  </div>
);

export default BestSale;
