import details from "./Text";
import CategoryItem from "./categoryItem/categoryItem";
const category = () => (
  <section className="w-[1420px] mb-[89px] mx-auto mt-12">
    <div className="flex">
      <div className="w-7 h-7 bg-green-300 rounded-full"></div>
      <p className="translate-x-3">دسته بندی محصولات</p>
    </div>
    <div className="mt-4">
      <div className="text-3xl font-extralight">
        <h4 className="font-bold inline">بهترین </h4>محصولات از
        <h4 className="font-bold inline">بهترین </h4>برندها برای شما
      </div>
    </div>
    <div className="flex gap-9 mt-8">
      {details.map((item, index) => (
        <CategoryItem key={index} {...item} />
      ))}
    </div>
  </section>
);
export default category;
