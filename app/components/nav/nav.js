import Image from 'next/image';
export default function nav() {
  return (
    <>
      <svg className="hidden">
        <symbol
          id="magnifying-glass"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </symbol>
        <symbol
          id="shopping-bag"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </symbol>
      </svg>
      <div className="w-[1420px] mx-auto mt-7">
        <div className="flex justify-between">
          <div className="flex justify-center items-center p-2 bg-slate-50 rounded-full w-36 h-11">
            <div className="ml-2">
              <Image src="/images/Star-1.png" alt="" width={25} height={25} />
            </div>
            <h3 className="w-[72px] h-7 text-slate-950 text-lg">
              لـــــــوگـــــــو
            </h3>
          </div>
          <div className=" bg-slate-50 rounded-full p-1.5 w-[531px] h-11">
            <div className="flex items-center justify-center w-[495px] h-8">
              <p className="ml-11 text-slate-950 bg-green-500 rounded-full text-xs py-1 px-4">
                صفحه اصلی
              </p>
              <p className="ml-11 text-slate-950 text-xs">فروشگاه</p>
              <p className="ml-11 text-slate-950 text-xs">پیگیری سفارشات</p>
              <p className="ml-11 text-slate-950 text-xs">درباره ما</p>
              <p className=" text-slate-950 text-xs">تماس با ما</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="relative">
                <input
                  type="text"
                  className="w-40 h-11 bg-slate-50 rounded-full pr-3"
                  placeholder="جستجو"
                />
                <div className="absolute top-3 left-4">
                  <svg className="w-5 h-5">
                    <use href="#magnifying-glass"></use>
                  </svg>
                </div>
              </div>
              <div className="bg-green-500 p-3 rounded-full mr-3">
                <svg className="h-6 w-6 ">
                  <use href="#shopping-bag"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
