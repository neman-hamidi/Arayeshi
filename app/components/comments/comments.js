import Image from "next/image";
export default function comments() {
  return (
    <>
      <svg className="hidden">
        <symbol
          id="arrow-left"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </symbol>
        <symbol
          id="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </symbol>
      </svg>
      <div>
        <div className="w-[1420px] mb-[89px] mx-auto mt-12">
          <div className="flex">
            <div className="w-7 h-7 bg-green-300 rounded-full"></div>
            <p className="translate-x-3">نظرات شما</p>
          </div>
          <div className="mt-4">
            <div className="font-extralight flex justify-between">
              <p className="text-3xl">مشتریان درباره ما چه میگویند؟</p>
              <div>
                <button className="text-sm py-2 px-6 bg-green-300 rounded-full ml-2">
                  <svg className="rotate-180 w-6 h-6">
                    <use href="#arrow-left"></use>
                  </svg>
                </button>
                <button className="text-sm py-2 px-6 bg-green-300 rounded-full">
                  <svg className="w-6 h-6">
                    <use href="#arrow-left"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-7 justify-center">
          <div className="py-4 px-6 bg-slate-50 rounded-3xl w-[434px] h-[274px]">
            <div className="flex items-center gap-3 border-b border-b-zinc-300 pb-4">
              <Image
                src="/images/Frame 43.png"
                width={60}
                height={60}
                alt="profile-comment"
                className="rounded-full"
              />
              <div>
                <p>سارا محمدی</p>
                <p className="text-zinc-400 mt-2 text-xs">
                  طرفدار محصولات شیگلم
                </p>
              </div>
            </div>
            <p className="mt-4 leading-7 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="flex gap-1 mt-6">
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
            </div>
          </div>
          <div className="py-4 px-6 bg-slate-50 rounded-3xl w-[434px] h-[274px]">
            <div className="flex items-center gap-3 border-b border-b-zinc-300 pb-4">
              <Image
                src="/images/Frame 43.png"
                width={60}
                height={60}
                alt="profile-comment"
                className="rounded-full"
              />
              <div>
                <p>مهتاب کرامتی</p>
                <p className="text-zinc-400 mt-2 text-xs">
                  طرفدار محصولات شیگلم
                </p>
              </div>
            </div>
            <p className="mt-4 leading-7 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="flex gap-1 mt-6">
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
            </div>
          </div>
          <div className="py-4 px-6 bg-slate-50 rounded-3xl w-[434px] h-[274px]">
            <div className="flex items-center gap-3 border-b border-b-zinc-300 pb-4">
              <Image
                src="/images/Frame 43.png"
                width={60}
                height={60}
                alt="profile-comment"
                className="rounded-full"
              />
              <div>
                <p>آتنا عصار</p>
                <p className="text-zinc-400 mt-2 text-xs">
                  طرفدار محصولات شیگلم
                </p>
              </div>
            </div>
            <p className="mt-4 leading-7 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="flex gap-1 mt-6">
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
            </div>
          </div>
          <div className="py-4 px-6 bg-slate-50 rounded-3xl w-[434px] h-[274px]">
            <div className="flex items-center gap-3 border-b border-b-zinc-300 pb-4">
              <Image
                src="/images/Frame 43.png"
                width={60}
                height={60}
                alt="profile-comment"
                className="rounded-full"
              />
              <div>
                <p>مبینا اکبری</p>
                <p className="text-zinc-400 mt-2 text-xs">
                  طرفدار محصولات شیگلم
                </p>
              </div>
            </div>
            <p className="mt-4 leading-7 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="flex gap-1 mt-6">
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
            </div>
          </div>
        </div>
       <div className="my-20">
            <img src="/images/Frame 47.png" alt="Discount-img" className="mx-auto" />
       </div>
      </div>
    </>
  );
}
