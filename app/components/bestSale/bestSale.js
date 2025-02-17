import { btns, details } from "./Text";
import BestItem from "./bestItem/bestItem";
const bestSale = () => (
  <>
    <div className="w-[1420px] mx-auto my-12">
      <div className="flex">
        <div className="w-7 h-7 bg-green-300 rounded-full"></div>
        <p className="translate-x-3">پرفروش ترین محصولات</p>
      </div>
      <div className="mt-4">
        <div className="text-3xl">
          <h3 className="font-bold inline text-2xl">ترندترین</h3>
          <span className="font-extralight">محصولات این هفته</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex">
          {btns.map((item, index) => (
            <button
              key={index}
              className="py-2 px-8 bg-green-400 rounded-full ml-3 mt-2 text-black"
            >
              {item}
            </button>
          ))}
        </div>
        <div>
          <button className="flex items-center text-xs py-2 px-8 border border-zinc-400 rounded-full ml3  mt-2 text-zinc-500">
            <svg className="ml-3 w-[20px] h-[20px]">
              <use href="#list-bullet"></use>
            </svg>
            لیست براساس:همه
          </button>
        </div>
      </div>
    </div>
    <div className="flex gap-7 flex-wrap  justify-center">
      {details.map((item, index) => (
        <BestItem key={index} {...item} />
      ))}
    </div>
    <div>
      <img src="/images/svg.png" className="h-28 w-full mt-10" alt="s" />
    </div>
  </>
);
export default bestSale;
