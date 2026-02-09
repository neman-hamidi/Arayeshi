"use client";
import { useState } from "react";
import Image from "next/image";
import { FiX, FiPlus, FiShoppingBag } from "react-icons/fi";
import { compareProduct, specLabels } from "./text";
const ComparePage = () => {
  // دیتای نمونه محصولات - در پروژه واقعی این از API یا Context می‌آید
  const [products, setProducts] = useState(compareProduct);

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <main
      className="min-h-screen bg-[#FDFDFD] pb-32 pt-32 font-[vazir]"
      dir="rtl"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* هدر هوشمند */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">
              میز{" "}
              <span className="font-light italic text-slate-300">مقایسه</span>
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mt-2">
              Professional Analytical Studio
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white border border-slate-100 p-2 rounded-2xl shadow-sm">
            <span className="text-[10px] font-black px-4 uppercase text-slate-400">
              4 / {products.length} محصول
            </span>
            <button className="bg-slate-950 text-white p-4 rounded-xl flex items-center gap-3 text-xs font-black hover:bg-emerald-600 transition-all">
              <FiPlus /> افزودن محصول جدید
            </button>
          </div>
        </div>

        {/* محفظه مقایسه (اسکرول افقی در دسکتاپ و موبایل) */}
        <div className="relative overflow-x-auto pb-10 no-scrollbar border-t border-slate-100">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                {/* ستون لیبل‌ها */}
                <th className="sticky right-0 z-20 bg-[#FDFDFD]/95 backdrop-blur-md p-0 min-w-[180px]">
                  <div className="h-[450px] flex flex-col justify-end pb-12 pr-4 border-b border-slate-50">
                    <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest rotate-180 [writing-mode:vertical-lr]">
                      مشخصات فنی
                    </span>
                  </div>
                </th>

                {products.map((product) => (
                  <th
                    key={product.id}
                    className="p-4 min-w-[320px] max-w-[320px] align-top transition-all duration-500"
                  >
                    <div className="bg-white rounded-[3rem] p-6 border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-700 relative group">
                      {/* دکمه حذف */}
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="absolute top-4 left-4 w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 hover:bg-red-50 hover:text-red-500 transition-all z-10"
                      >
                        <FiX size={14} />
                      </button>

                      {/* تصویر محصول */}
                      <div className="relative aspect-square w-full mb-6 rounded-[2.5rem] overflow-hidden bg-[#F9F9F7]">
                        <Image
                          src={product.image}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                          alt={product.name}
                          
                        />
                      </div>

                      {/* اطلاعات پایه */}
                      <div className="text-right space-y-2">
                        <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">
                          {product.brand}
                        </span>
                        <h3 className="text-sm font-black text-slate-950 h-10 line-clamp-2 leading-relaxed">
                          {product.name}
                        </h3>
                        <p className="text-lg font-black text-slate-900 pt-2">
                          {product.price}{" "}
                          <small className="text-[10px] font-medium">
                            تومان
                          </small>
                        </p>
                      </div>

                      {/* دکمه افزودن به سبد */}
                      <button className="w-full mt-6 py-4 bg-slate-950 text-white rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all group-hover:shadow-xl group-hover:shadow-emerald-100">
                        <FiShoppingBag /> خرید آنلاین
                      </button>
                    </div>
                  </th>
                ))}

                {/* جایگاه خالی برای محصول جدید */}
                {products.length < 4 && (
                  <th className="p-4 min-w-[320px] align-top">
                    <div className="h-[450px] border-2 border-dashed border-slate-100 rounded-[3rem] flex flex-col items-center justify-center gap-4 text-slate-200 hover:border-slate-300 hover:text-slate-400 transition-all cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center">
                        <FiPlus size={28} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        محصول چهارم
                      </span>
                    </div>
                  </th>
                )}
              </tr>
            </thead>

            <tbody>
              {specLabels.map((spec) => (
                <tr key={spec.key} className="group">
                  <td className="sticky right-0 z-20 bg-[#FDFDFD]/95 backdrop-blur-md p-8 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                    {spec.label}
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="p-8 text-sm font-bold text-slate-800 border-b border-x border-slate-50 group-hover:bg-slate-50/50 transition-colors"
                    >
                      {product.specs[spec.key]}
                    </td>
                  ))}
                  {/* سلول خالی برای دکمه مثبت */}
                  {products.length < 4 && (
                    <td className="p-8 border-b border-slate-50"></td>
                  )}
                </tr>
              ))}

              {/* ردیف نهایی (خرید مجدد) */}
              <tr>
                <td className="sticky right-0 bg-[#FDFDFD] p-8"></td>
                {products.map((product) => (
                  <td key={product.id} className="p-8 text-center">
                    <button className="text-slate-950 text-[10px] font-black border-b-2 border-slate-950 pb-1 hover:text-emerald-500 hover:border-emerald-500 transition-all uppercase tracking-widest">
                      جزئیات بیشتر کالا
                    </button>
                  </td>
                ))}
                {products.length < 4 && <td className="p-8"></td>}
              </tr>
            </tbody>
          </table>
        </div>

        {/* راهنمای شناور برای موبایل */}
        <div className="lg:hidden flex justify-center mt-10 gap-4">
          <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
          <div className="w-2 h-1 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
};

export default ComparePage;
