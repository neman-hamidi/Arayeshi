import Image from "next/image";
import BestItem from "./bestItem/bestItem";
export default function bestSale() {
  return (
    <>
      <svg className="hidden">
        <symbol
          id="list-bullet"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </symbol>
      </svg>
      <div className="w-[1420px] mx-auto my-12">
        <div className="flex">
          <div className="w-7 h-7 bg-green-300 rounded-full"></div>
          <p className="translate-x-3">پرفروش ترین محصولات</p>
        </div>
        <div className="mt-4">
          <div className="text-3xl">
            <h6 className="font-bold inline text-2xl">ترندترین </h6>
            <span className="font-extralight">محصولات این هفته</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex">
            <button className="py-2 px-8 bg-green-400 rounded-full ml-3 mt-2 text-black">
              همه محصولات
            </button>
            <button className="py-2 px-8 border border-zinc-400 rounded-full ml-3  mt-2 text-zinc-500">
              اوردینری
            </button>
            <button className="py-2 px-8 border border-zinc-400 rounded-full ml-3  mt-2 text-zinc-500">
              شیگلم
            </button>
            <button className="py-2 px-8 border border-zinc-400 rounded-full ml-3 mt-2 text-zinc-500">
              ویکتوریا سیکرت
            </button>
            <button className="py-2 px-8 border border-zinc-400 rounded-full ml-3  mt-2 text-zinc-500">
              جان استونز
            </button>
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
        <BestItem title="نام این محصول در اینجا" price="750">
          <Image
            src="/images/best6.png"
            alt="best product Sale"
            className="rounded-xl"
            width={301}
            height={198}
          />
        </BestItem>
        <BestItem title="اوردینری" price="58">
          <Image
            src="/images/best2.png"
            alt="best product Sale"
            className="rounded-xl"
            width={301}
            height={198}
          />
        </BestItem>
        <BestItem title="نام این محصول در اینجا" price="750">
          <Image
            src="/images/best3.png"
            alt="best product Sale"
            className="rounded-xl"
            width={301}
            height={198}
          />
        </BestItem>
        <BestItem title="اوردینری" price="300">
          <Image
            src="/images/best4.png"
            alt="best product Sale"
            className="rounded-xl"
            width={301}
            height={198}
          />
        </BestItem>
        <BestItem title="اوردینری" price="12">
          <Image
            src="/images/best5.png"
            alt="best product Sale"
            className="rounded-xl"
            width={301}
            height={198}
          />
        </BestItem>
        <BestItem title="ضدجوش و لکه بر" price="90">
          <Image
            src="/images/best6.png"
            alt="best product Sale"
            className="rounded-xl"
            width={301}
            height={198}
          />
        </BestItem>
        <BestItem title="اوردینری" price="340">
          <Image
            src="/images/best7.png"
            alt="best product Sale"
            className="rounded-xl"
            width={301}
            height={198}
          />
        </BestItem>
        <BestItem title="ضدجوش و لکه بر" price="100">
          <Image
            src="/images/best8.png"
            alt="best product Sale"
            className="rounded-xl"
            width={301}
            height={198}
          />
        </BestItem>
      </div>
      <div>
        <img src="/images/svg.png" className="h-28 w-full mt-10"  alt="s" />
      </div>
    </>
  );
}
