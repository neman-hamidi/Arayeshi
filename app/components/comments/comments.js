import Image from "next/image";
import commentsUser from "./Text";
const comments = () => (
  <section>
    <div className="w-[1420px] mb-[89px] mx-auto mt-12">
      <div className="flex">
        <div className="w-7 h-7 bg-green-300 rounded-full"></div>
        <h3 className="translate-x-3">نظرات شما</h3>
      </div>
      <div className="mt-4">
        <div className="font-extralight flex justify-between">
          <p className="text-3xl">مشتریان درباره ما چه میگویند؟</p>
          <div>
            <button className="text-sm py-2 px-6 bg-green-300 rounded-full ml-2">
              <svg className="rotate-180 w-6 h-6">
                <use href="#arrow-left"></use>
              </svg>
            </button>
            <button className="text-sm py-2 px-6 bg-green-300 rounded-full">
              <svg className="w-6 h-6">
                <use href="#arrow-left"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-7 justify-center">
      {commentsUser.map((item, index) => (
        <div
          key={index}
          className="py-4 px-6 bg-slate-50 rounded-3xl w-[434px] h-[274px]"
        >
          <div className="flex items-center gap-3 border-b border-b-zinc-300 pb-4">
            <Image
              src={item.src}
              width={60}
              height={60}
              alt="profile-comment"
              className="rounded-full"
            />
            <div>
              <p>{item.name}</p>
              <p className="text-zinc-400 mt-2 text-xs">{item.title}</p>
            </div>
          </div>
          <p className="mt-4 leading-7 text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <div className="flex gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg key={index} className="w-4 h-4 text-yellow-400">
                <use href="#star"></use>
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="my-20">
      <img src="/images/Frame 47.png" alt="Discount-img" className="mx-auto" />
    </div>
  </section>
);
export default comments;
