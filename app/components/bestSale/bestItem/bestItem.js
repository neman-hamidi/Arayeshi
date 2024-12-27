import Image from "next/image";
export default function bestItem({ title, price, children }) {
  return (
    <>
      <svg className="hidden">
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
      <div className="w-[332px] h-[320px] p-[15px] bg-slate-50 rounded-3xl">
        <div>{children}</div>
        <p className="text-sm mt-[14px] mb-1">{title}</p>
        <p className="text-xs text-zinc-500">Miseico</p>
        <div className="flex justify-between mt-1 items-center">
          <p className="mt-1">
            {price} <span className="text-[8px] text-zinc-500">تومان</span>
          </p>

          <div className="p-2 bg-green-300 rounded-full">
            <svg className="w-4 h-4">
              <use href="#shopping-bag"></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
