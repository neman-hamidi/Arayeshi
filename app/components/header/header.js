import Image from "next/image";
import btns from "./Text";
const header = () => (
  <>
    <div className="w-[1420px] h-[757px] mx-auto mt-7 bg-slate-50 rounded-3xl flex justify-between items-center">
      <div className="pt-11 mr-16">
        <div className="flex items-center ">
          <div className="w-2 h-2 rounded-full bg-green-400 ml-2"></div>
          <p className="font-extralight">محصولات 100% اورجینال</p>
        </div>
        <div>
          <p className="font-light text-4xl my-5">
            محصولات آرایشی باکیفیت و ماندگار برای زیبایی
          </p>
          <span className="flex items-center">
            <Image
              src="/images/image-3.png"
              width={45}
              height={45}
              className="rounded-full"
              alt=""
            />
            <Image
              src="/images/Frame-18.png"
              width={45}
              height={45}
              className="rounded-full translate-x-4"
              alt=""
            />
            <span className="font-light text-4xl">طبیعی شما!</span>
          </span>
        </div>
        <div className="my-5 w-[610px] h-24 text-zinc-400">
          <p className="leading-8">
            " با محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و
            درخششی جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم،
            تجربه‌ای متفاوت از خرید را به شما هدیه می‌دهند. "
          </p>
        </div>
        <div>
          <button className="py-3 px-7 bg-green-400 rounded-full">
            مشاهده محصولات
          </button>
        </div>
        <div className="w-[650px] mt-44">
          {btns.map((item, index) => (
            <button
              key={index}
              className="py-2 px-8 border border-zinc-400 rounded-full ml-2 mt-2 text-zinc-500"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div className="ml-11">
        <div className="relative">
          <Image
            src="/images/image-header.png"
            width={490}
            height={595}
            alt="haeder"
          />
          <div className="w-[200px] h-60 absolute bottom-4 -right-32 bg-white p-3 rounded-md">
            <div className="mb-5 flex">
              <Image
                src="/images/Star-1.png"
                width={23}
                height={23}
                alt="star header"
              />
              <span className="mr-1">ویژه ها</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>محصولات ویژه برند Ordinary</p>
              </div>
              <div>
                <svg className="w-6 h-6 p-1 bg-green-400 rounded-full">
                  <use href="#arrow-up-left"></use>
                </svg>
              </div>
            </div>
            <div>
              <Image
                src="/images/image-header2.png"
                width={178}
                height={100}
                alt="header-2"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default header;
