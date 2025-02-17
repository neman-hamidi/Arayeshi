import Image from "next/image";
const nav = () => (
  <nav className="w-[1420px] mx-auto mt-7">
    <div className="flex justify-between">
      <div className="flex justify-center items-center p-2 bg-slate-50 rounded-full w-36 h-11">
        <div className="ml-2">
          <Image src="/images/Star-1.png" alt="imgs" width={25} height={25} />
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
          <p className="text-slate-950 text-xs">تماس با ما</p>
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
  </nav>
);
export default nav;
