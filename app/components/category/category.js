import details from "./Text";
import CategoryItem from "./categoryItem/categoryItem";

const Category = () => (
  // استفاده از max-w به جای w برای واکنش‌گرایی بهتر و px-4 برای جلوگیری از چسبیدن به لبه‌ها در موبایل
  <section
    className="max-w-[1420px] mb-[89px] mx-auto mt-12 px-4"
    aria-labelledby="category-title"
  >
    {/* بخش نشانگر و عنوان کوچک */}
    <header className="flex items-center gap-3 mb-4">
      <div
        className="w-7 h-7 bg-green-300 rounded-full"
        aria-hidden="true"
      ></div>
      <h2 id="category-title" className="text-base font-medium text-slate-700">
        دسته بندی محصولات
      </h2>
    </header>

    {/* تیتر اصلی بخش با رعایت ساختار SEO */}
    <div className="mt-4">
      <h3 className="text-3xl font-extralight leading-tight">
        <strong className="font-bold">بهترین </strong>
        محصولات از
        <strong className="font-bold"> بهترین </strong>
        برندها برای شما
      </h3>
    </div>

    {/* لیست دسته‌بندی‌ها */}
    <div className="flex flex-wrap gap-9 mt-8 justify-center lg:justify-start">
      {details.map((item) => (
        <CategoryItem
          key={item.id || item.title} // استفاده از id به جای index برای بهینه‌سازی رندرینگ React
          {...item}
        />
      ))}
    </div>
  </section>
);

export default Category;
