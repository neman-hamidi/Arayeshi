import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

export default function footer() {
  return (
    <>
      <div className="flex border-y border-y-zinc-300">
        <div className="border-l border-l-zinc-300 w-full pb-9">
          <div className="mt-8 pr-14">
            <div className="flex justify-center items-center p-2 bg-slate-50 rounded-full w-36 h-11">
              <div className="ml-2">
                <Image src="/images/Star-1.png" alt="" width={25} height={25} />
              </div>
              <h3 className="w-[72px] h-7 text-slate-950 text-lg">
                لـــــــوگـــــــو
              </h3>
            </div>
            <div className="my-4 w-[452px] mb-7 text-zinc-400 text-sm leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که
            </div>
            <div className="relative w-96">
              <input
                type="text"
                placeholder="ایمیل شما..."
                className="p-3 bg-white rounded-full w-96"
              />
              <div className="absolute left-2 top-2">
                <button
                  type="submit"
                  className="py-2 px-5 bg-green-300 text-xs rounded-full"
                >
                  عضویت در خبر نامه
                </button>
              </div>
            </div>
            <div className="flex mt-20 gap-2">
              <div className="bg-white p-2.5 w-10 h-10 rounded-full flex justify-center items-center">
                <FaInstagram />
              </div>
              <div className="bg-white p-2.5 w-10 h-10 rounded-full flex justify-center items-center">
                <FaXTwitter />
              </div>
              <div className="bg-white p-2.5 w-10 h-10 rounded-full flex justify-center items-center">
                <BiLogoTelegram />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mr-9 mt-8 relative">
            <div className="flex">
              <div className="w-7 h-7 bg-green-300 rounded-full"></div>
              <p className="translate-x-3">منو وب سایت</p>
            </div>
            <div className="mt-7">
              <ul className="flex flex-col gap-5">
                <li className="text-lg">صفحه اصلی</li>
                <li className="text-base">فروشگاه</li>
                <li className="text-base">پیگیری سفارشات</li>
                <li className="text-base">درباره ما</li>
                <li className="text-base">تماس با ما</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4 absolute left-20 bottom-0">
              <img src="/images/image (1).png" alt="" />
              <img src="/images/image 7.png" alt="" />
            </div>
          </div>
        </div>
      </div>
        <div className="my-3 text-center text-zinc-400">
            <p>تمام حقوق برای وبسایت محفوظ است.</p>
        </div>
    </>
  );
}
