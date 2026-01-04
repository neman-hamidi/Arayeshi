import Image from "next/image";
import Link from "next/link";

export default function ArticleSection() {
  return (
    // بخش اصلی با پدینگ مناسب برای موبایل
    <section className="max-w-[1420px] mb-[89px] mx-auto mt-12 px-4 lg:px-0">
      {/* هدر بخش مقالات */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
          <span
            className="w-7 h-7 bg-green-300 rounded-full"
            aria-hidden="true"
          ></span>
          <h2 className="text-lg font-medium">چیکار کنیم؟</h2>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-6">
          <h1 className="text-2xl lg:text-3xl font-extralight text-center lg:text-right w-full lg:w-auto">
            راهنمای ویژه مراقبت از پوست با دکتر
          </h1>
          <div className="w-full lg:w-auto flex justify-center">
            <Link
              href="/articles"
              className="text-sm py-2.5 px-8 bg-green-300 rounded-full hover:bg-green-400 transition-colors shadow-sm"
              aria-label="مشاهده تمام مقالات مراقبت از پوست"
            >
              مشاهده همه مقالات
            </Link>
          </div>
        </div>
      </header>

      {/* لیست مقالات ریسپانسیو */}
      {/* تغییر: استفاده از Grid برای مدیریت ستون‌ها در سایزهای مختلف */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* مقاله ۱ */}
        <article className="flex flex-col group cursor-pointer">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/me/images/Frame 38.png"
              width={400}
              height={250}
              alt="تصویر مقاله بهترین محصولات مراقبت از پوست در سال ۲۰۲۴"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-xl py-3 font-semibold group-hover:text-green-600 transition-colors">
            بهترین محصولات مراقبت از پوست 2024
          </h3>
          <p className="text-zinc-600 leading-relaxed text-sm lg:max-w-[384px] text-justify">
            با محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و
            درخششی جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم
            است.
          </p>
        </article>

        {/* مقاله ۲ */}
        <article className="flex flex-col group cursor-pointer">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/me/images/Frame 39.png"
              width={300}
              height={250}
              alt="راهکارهای نوین مراقبت از پوست"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-xl py-3 font-semibold group-hover:text-green-600 transition-colors">
            بهترین محصولات مراقبت از پوست 2024
          </h3>
          <p className="text-zinc-600 leading-relaxed text-sm lg:max-w-[288px] text-justify">
            محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و درخششی
            جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم است.
          </p>
        </article>

        {/* مقاله ۳ */}
        <article className="flex flex-col group cursor-pointer">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/me/images/Frame 40.png"
              width={250}
              height={250}
              alt="تاثیر محصولات با کیفیت بر سلامت پوست"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-xl py-3 font-semibold group-hover:text-green-600 transition-colors">
            بهترین محصولات مراقبت از پوست 2024
          </h3>
          <p className="text-zinc-600 leading-relaxed text-sm lg:max-w-[256px] text-justify">
            محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و درخششی
            جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم است.
          </p>
        </article>

        {/* مقاله ۴ */}
        <article className="flex flex-col group cursor-pointer">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/me/images/Frame 41.png"
              width={220}
              height={250}
              alt="مشاوره تخصصی پوست"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-xl py-3 font-semibold group-hover:text-green-600 transition-colors">
            بهترین محصولات مراقبت از پوست 2024
          </h3>
          <p className="text-zinc-600 leading-relaxed text-sm lg:max-w-[256px] text-justify">
            محصولات آرایشی بی‌نظیر ما، زیبایی طبیعی خود را تقویت کنید و درخششی
            جدید به ظاهر خود ببخشید. اینجا، کیفیت و تنوع دست در دست هم است.
          </p>
        </article>
      </div>
    </section>
  );
}
