import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({ title, count, src, href = "#" }) => (
  // استفاده از تگ article برای کارت‌ها جهت درک بهتر موتورهای جستجو
  <article className="p-4 bg-slate-50 rounded-3xl w-80 h-auto mt-7 hover:shadow-md transition-shadow">
    <header className="flex flex-col gap-1">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>

      <div className="flex justify-between items-center mb-4">
        <span
          className="text-sm text-zinc-500"
          aria-label={`${count} محصول در این دسته‌بندی`}
        >
          {count} محصول
        </span>

        {/* استفاده از لینک برای آیکون جهت بهبود تعامل کاربر */}
        <Link
          href={href}
          className="group flex items-center justify-center w-7 h-7 bg-green-400 rounded-full hover:bg-green-500 transition-colors"
          aria-label={`مشاهده محصولات ${title}`}
        >
          <svg
            className="w-5 h-5 p-1 text-white group-hover:scale-110 transition-transform"
            aria-hidden="true"
          >
            <use href="#arrow-up-left"></use>
          </svg>
        </Link>
      </div>
    </header>

    <figure className="relative overflow-hidden rounded-2xl">
      <Image
        src={src}
        width={296}
        height={140}
        // بهبود Alt برای سئو: نام دسته‌بندی در توضیحات تصویر بیاید بهتر است
        alt={`نمایی از محصولات دسته‌بندی ${title}`}
        className="object-cover transition-transform duration-300 hover:scale-105"
        priority={false}
      />
    </figure>
  </article>
);

export default CategoryItem;
