import Image from "next/image";
export default function bestItem({ title, price, src }) {
  return (
    <div className="w-[332px] h-[320px] p-[15px] bg-slate-50 rounded-3xl">
      <Image
        src={src}
        alt="best product Sale"
        className="rounded-xl"
        width={301}
        height={198}
      />
      <h3 className="text-sm mt-[14px] mb-1">{title}</h3>
      <p className="text-xs text-zinc-500">Miseico</p>
      <div className="flex justify-between mt-1 items-center">
        <p className="mt-1">
          {price},000 <span className="text-[8px] text-zinc-500">تومان</span>
        </p>
        <div className="p-2 bg-green-300 rounded-full">
          <svg className="w-4 h-4">
            <use href="#shopping-bag"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
