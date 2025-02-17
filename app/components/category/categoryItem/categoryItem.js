import Image from "next/image";
const categoryItem = ({ title, count, src }) => (
  <div className="p-4 bg-slate-50 rounded-3xl w-80 h-62 mt-7">
    <h3 className="text-lg">{title}</h3>
    <div className="flex my-5 mt-0.5 justify-between">
      <p className="text-sm text-zinc-500">{count} محصول</p>
      <svg className="w-6 h-6 p-1 bg-green-400 rounded-full">
        <use href="#arrow-up-left"></use>
      </svg>
    </div>
    <Image
      src={src}
      width={296}
      height={140}
      alt="product image"
      className="rounded-2xl"
    />
  </div>
);
export default categoryItem;
