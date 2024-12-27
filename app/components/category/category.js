import Image from "next/image";
import CategoryItem from "./categoryItem/categoryItem";
export default function category() {
  return (
    <>
      <div className="w-[1420px] mb-[89px] mx-auto mt-12">
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
          <CategoryItem title="لوسیون بدن" count="24">
            <Image
              src="/images/Frame-19.png"
              width={296}
              height={140}
              alt="product image"
              className="rounded-2xl"
            />
          </CategoryItem>
          <CategoryItem title="کرم مراقبت از پوست" count="34">
            <Image
              src="/images/Frame-20.png"
              width={296}
              height={140}
              alt="product image"
              className="rounded-2xl"
            />
          </CategoryItem>
          <CategoryItem title="ضد جوش و لکه بر" count="19">
            <Image
              src="/images/Frame-21.png"
              width={296}
              height={140}
              alt="product image"
              className="rounded-2xl"
            />
          </CategoryItem>
          <CategoryItem title="آبرسان پوست" count="8">
            <Image
              src="/images/Frame-22.png"
              width={296}
              height={140}
              alt="product image"
              className="rounded-2xl"
            />
          </CategoryItem>
        </div>
      </div>
    </>
  );
}
