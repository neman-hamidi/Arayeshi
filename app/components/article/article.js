import Image from "next/image";
export default function article() {
  return (
    <div>
      <div className="w-[1420px] mb-[89px] mx-auto mt-12">
        <div className="flex">
          <div className="w-7 h-7 bg-green-300 rounded-full"></div>
          <p className="translate-x-3">چیکار کنیم؟</p>
        </div>
        <div className="mt-4">
          <div className=" font-extralight flex justify-between">
            <p className="text-3xl">راهنمای ویژه مراقبت از پوست با دکتر</p>
            <button className="text-sm py-2 px-6 bg-green-300 rounded-full">
              مشاهده همه مقالات
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-12 justify-center">
        <div>
          <Image
            src="/images/Frame 38.png"
            width={400}
            height={100}
            alt="article img"
          />
          <p className="py-3">بهترین محصولات مراقبت از پوست 2024</p>
          <p className="text-zinc-500 w-96">
            محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و درخششی
            جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم است.
          </p>
        </div>

        <div>
          <Image
            src="/images/Frame 39.png"
            width={300}
            height={100}
            alt="article img"
          />
          <p className="py-3">بهترین محصولات مراقبت از پوست 2024</p>
          <p className="text-zinc-500 w-72">
            محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و درخششی
            جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم است.
          </p>
        </div>

        <div>
          <Image
            src="/images/Frame 40.png"
            width={250}
            height={100}
            alt="article img"
          />
          <p className="py-3">بهترین محصولات مراقبت از پوست 2024</p>
          <p className="text-zinc-500 w-64">
            محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و درخششی
            جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم است.
          </p>
        </div>

        <div>
          <Image
            src="/images/Frame 41.png"
            width={220}
            height={100}
            alt="article img"
          />
          <p className="py-3">بهترین محصولات مراقبت از پوست 2024</p>
          <p className="text-zinc-500 w-64">
            محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و درخششی
            جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم است.
          </p>
        </div>
        
      </div>
    </div>
  );
}
