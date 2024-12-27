export default function categoryItem({ title, count, children }) {
  return (
    <>
      <svg className="hidden">
        <symbol
          id="arrow-up-left"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
          />
        </symbol>
      </svg>
      <div className="p-4 bg-slate-50 rounded-3xl w-80 h-62 mt-7">
        <p className="text-lg">{title}</p>
        <div className="flex my-5 mt-0.5 justify-between">
          <p className="text-sm text-zinc-500">{count} محصول</p>
          <svg className="w-6 h-6 p-1 bg-green-400 rounded-full">
            <use href="#arrow-up-left"></use>
          </svg>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
