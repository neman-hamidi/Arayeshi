"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiArrowRight,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const CartPage = () => {
  // دیتای تستی برای سبد خرید
  const [items, setItems] = useState([
    {
      id: 1,
      title: "سرم روشن‌کننده ویتامین C",
      brand: "DIOR",
      price: 4900000,
      quantity: 1,
      image: "/images/body.jpg",
      color: "طلایی",
    },
    {
      id: 2,
      title: "رژ لب مایع مات",
      brand: "CHANEL",
      price: 3100000,
      quantity: 2,
      image: "/images/p6.png",
      color: "زرشکی",
    },
    {
      id: 3,
      title: "ادو پرفیوم جادور",
      brand: "DIOR",
      price: 8700000,
      quantity: 3,
      image: "/images/dior.jpg",
      color: "سفید",
    },
  ]);

  const updateQuantity = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 10000000 ? 0 : 50000;

  return (
    <main className="min-h-screen bg-[#efefef] pb-32 font-[vazir] " dir="rtl">
      {/* هدر صفحه */}
      <header className="pt-32 pb-12 px-6 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          <div className="space-y-2">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">
              Your Selection
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">
              سبد <span className="font-light italic text-slate-300">خرید</span>
            </h1>
          </div>
          <span className="text-xs font-bold text-slate-400">
            ({items.length} مورد)
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* --- لیست محصولات --- */}
          <div className="flex-1 space-y-8">
            {items.length > 0 ? (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* تصویر محصول */}
                  <div className="relative w-full sm:w-40 aspect-square overflow-hidden rounded-3xl bg-slate-50">
                    <Image
                      src={item.image}
                      fill
                      alt={item.title}
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* جزئیات محصول */}
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                          {item.brand}
                        </span>
                        <h3 className="text-lg font-black text-slate-950">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium">
                          رنگ: {item.color}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-3 text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-6">
                      {/* کنترل تعداد */}
                      <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-1 border border-slate-100">
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-emerald-500 hover:text-white transition-all"
                        >
                          <FiPlus size={14} />
                        </button>
                        <span className="text-sm font-black w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-100 transition-all"
                        >
                          <FiMinus size={14} />
                        </button>
                      </div>
                      {/* قیمت واحد */}
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Price
                        </p>
                        <span className="text-xl font-black text-slate-950">
                          {(item.price * item.quantity).toLocaleString()}{" "}
                          <small className="text-[10px]">تومان</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                <p className="text-slate-400 font-bold mb-6">
                  سبد خرید شما خالی است
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-slate-950 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest"
                >
                  بازگشت به فروشگاه <FiArrowRight />
                </Link>
              </div>
            )}
          </div>

          {/* --- خلاصه سفارش (Sticky Sidebar) --- */}
          <aside className="lg:w-[400px]">
            <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl lg:sticky lg:top-32">
              <h2 className="text-xl font-black text-slate-950 mb-8 pb-4 border-b border-slate-50">
                خلاصه صورت‌حساب
              </h2>

              <div className="space-y-6">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-400">جمع کل کالاها</span>
                  <span className="text-slate-950 font-black">
                    {subtotal.toLocaleString()} تومان
                  </span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-400">هزینه ارسال</span>
                  <span className="text-emerald-600 font-black">
                    {shipping === 0
                      ? "رایگان"
                      : `${shipping.toLocaleString()} تومان`}
                  </span>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-xs font-black text-slate-900">
                      مبلغ قابل پرداخت
                    </p>
                    <p className="text-[10px] text-slate-400">
                      با احتساب مالیات بر ارزش افزوده
                    </p>
                  </div>
                  <span className="text-2xl font-black text-slate-950">
                    {(subtotal + shipping).toLocaleString()}{" "}
                    <small className="text-xs">تومان</small>
                  </span>
                </div>

                <button className="w-full bg-slate-950 text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-2xl flex items-center justify-center gap-3 mt-4 group">
                  تکمیل فرآیند خرید
                  <FiArrowRight className="group-hover:-translate-x-2 transition-transform" />
                </button>
              </div>

              {/* تضمین‌ها */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-3xl text-center">
                  <FiShield className="text-emerald-500" size={20} />
                  <span className="text-[9px] font-black text-slate-950 uppercase">
                    ضمانت اصالت
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-3xl text-center">
                  <FiTruck className="text-emerald-500" size={20} />
                  <span className="text-[9px] font-black text-slate-950 uppercase">
                    ارسال اکسپرس
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
