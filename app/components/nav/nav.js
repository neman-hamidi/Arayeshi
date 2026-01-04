import Link from "next/link";

const Navbar = () => (
  <nav className="max-w-[1420px] w-[95%] mx-auto mt-7" aria-label="منوی اصلی">
    <div className="flex justify-between items-center gap-4">
      {/* بخش لوگو */}
      <Link
        href="/"
        className="flex shrink-0 justify-center items-center p-2 bg-slate-50 rounded-full w-32 md:w-36 h-11"
      >
        <h1 className="text-slate-950 text-sm md:text-lg font-bold">
          لـــــــوگـــــــو
        </h1>
      </Link>

      {/* منوی ناوبری مرکزی - در موبایل مخفی می‌شود */}
      <div className="hidden lg:flex bg-slate-50 rounded-full p-1.5 w-[531px] h-11 items-center justify-center">
        <ul className="flex items-center justify-center list-none p-0 m-0 gap-8">
          <li>
            <Link
              href="/"
              className="ml-1 text-slate-950 bg-green-500 rounded-full text-xs py-1.5 px-4 block transition-all hover:bg-green-600"
            >
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="ml-1 text-slate-950 text-xs hover:text-green-600 transition-colors"
            >
              فروشگاه
            </Link>
          </li>
          <li>
            <Link
              href="/track-order"
              className="ml-1 text-slate-950 text-xs hover:text-green-600 transition-colors"
            >
              پیگیری سفارشات
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="ml-1 text-slate-950 text-xs hover:text-green-600 transition-colors"
            >
              درباره ما
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-slate-950 text-xs hover:text-green-600 transition-colors"
            >
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>

      {/* بخش جستجو و سبد خرید */}
      <div className="flex items-center gap-2">
        <form className="relative flex items-center">
          <input
            type="search"
            className="w-32 md:w-40 h-11 bg-slate-50 rounded-full pr-3 pl-8 text-xs outline-none focus:border-green-400 transition-all"
            placeholder="جستجو"
          />
        </form>
        <Link
          href="/cart"
          className="bg-green-500 p-3 rounded-full hover:bg-green-600"
        >
          <svg className="h-6 w-6 text-white" aria-hidden="true">
            <use href="#shopping-bag"></use>
          </svg>
        </Link>
      </div>
    </div>
  </nav>
);
export default Navbar