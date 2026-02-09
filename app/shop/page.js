"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { FiFilter, FiShoppingBag, FiStar, FiX, FiCheck } from "react-icons/fi";

import { productsData, availableColors, Filters } from "./text";

const ShopPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(15000000);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null); // null یعنی همه رنگ‌ها
  const [sortBy, setSortBy] = useState("newest");

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  // --- موتور فیلتر و مرتب‌سازی ترکیبی (بدون حذف قابلیت‌ها) ---
  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    if (onlyInStock) result = result.filter((p) => p.inStock);
    if (selectedBrands.length > 0)
      result = result.filter((p) => selectedBrands.includes(p.brand));
    if (selectedColor)
      result = result.filter((p) => p.colors.includes(selectedColor));
    result = result.filter((p) => p.price <= priceRange);

    if (sortBy === "cheapest") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "expensive") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "newest")
      result.sort((a, b) => new Date(b.date) - new Date(a.date));

    return result;
  }, [priceRange, onlyInStock, selectedBrands, selectedColor, sortBy]);

  return (
    <main className="min-h-screen bg-[#fcfcfc] pb-20 font-[vazir]" dir="rtl">
      <header className="pt-32 pb-12 px-6 text-center bg-white border-b border-slate-50">
        <h1 className="text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter">
          LUXE{" "}
          <span className="font-light italic text-slate-300">COLLECTION</span>
        </h1>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 mt-10">
        {/* --- سایدبار فیلترها (تمامی قابلیت‌ها فعال) --- */}
        <aside
          className={`fixed inset-0 z-50 lg:relative lg:inset-auto lg:z-0 lg:w-72 bg-white lg:bg-transparent p-8 lg:p-0 transition-all duration-500 ${showFilters ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full lg:opacity-100 lg:translate-x-0 invisible lg:visible"}`}
        >
          <div className="flex items-center justify-between lg:hidden mb-10">
            <h2 className="text-xl font-black">فیلترها</h2>
            <button
              onClick={() => setShowFilters(false)}
              className="p-2 bg-slate-100 rounded-full"
            >
              <FiX />
            </button>
          </div>

          <div className="space-y-10 sticky top-32">
            {/* ۱. فیلتر برندها */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-r-2 border-emerald-500 pr-3">
                برندها
              </h3>
              <div className="space-y-2">
                {["DIOR", "CHANEL", "GIVENCHY"].map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => toggleBrand(brand)}
                  >
                    <span
                      className={`text-xs font-bold ${selectedBrands.includes(brand) ? "text-slate-950" : "text-slate-400"}`}
                    >
                      {brand}
                    </span>
                    <div
                      className={`w-5 h-5 rounded border-2 transition-all ${selectedBrands.includes(brand) ? "bg-slate-950 border-slate-950" : "border-slate-100"}`}
                    >
                      {selectedBrands.includes(brand) && (
                        <FiCheck className="text-white text-[10px] -translate-x-1 translate-y-1" />
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* ۲. فیلتر بازه قیمتی */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-r-2 border-emerald-500 pr-3">
                قیمت
              </h3>
              <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
                <span className="text-sm font-black text-emerald-600">
                  {priceRange.toLocaleString()} تومان
                </span>
                <input
                  type="range"
                  min="500000"
                  max="15000000"
                  step="100000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-950 mt-4"
                />
              </div>
            </div>

            {/* ۳. فیلتر رنگ‌ها (با دکمه "همه") */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-r-2 border-emerald-500 pr-3">
                رنگ‌بندی
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedColor(null)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold border transition-all ${selectedColor === null ? "bg-slate-950 border-slate-950 text-white" : "bg-white border-slate-100 text-slate-500 hover:border-slate-300"}`}
                >
                  همه رنگ‌ها
                </button>
                {availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor === color ? "border-slate-950 scale-110 shadow-md" : "border-transparent hover:scale-105"}`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color && (
                      <FiCheck className="text-white text-[10px] shadow-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ۴. فیلتر موجودی */}
            <div className="pt-6 border-t border-slate-100">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setOnlyInStock(!onlyInStock)}
              >
                <span className="text-xs font-black text-slate-900">
                  فقط محصولات موجود
                </span>
                <div
                  className={`w-10 h-5 rounded-full transition-all relative flex items-center px-1 ${onlyInStock ? "bg-emerald-500" : "bg-slate-200"}`}
                >
                  <div
                    className={`w-3 h-3 bg-white rounded-full transition-all transform ${onlyInStock ? "-translate-x-5" : "translate-x-0"}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* --- بخش نمایش محصولات --- */}
        <div className="flex-1">
          {/* ۵. نوار مرتب‌سازی (جدید، ارزان، گران) */}
          <div className="flex justify-between items-center mb-10 bg-white p-4 rounded-3xl border border-slate-50 shadow-sm">
            <div className="flex gap-2">
              {Filters.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSortBy(opt.id)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${sortBy === opt.id ? "bg-slate-950 text-white" : "text-slate-400 hover:text-slate-900"}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden p-2 bg-slate-950 text-white rounded-xl"
            >
              <FiFilter />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`group ${!product.inStock ? "opacity-60" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#f9f9f9] mb-6">
                  <Image
                    src={product.src}
                    fill
                    alt={product.title}
                    loading="lazy"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {product.inStock && (
                    <button className="absolute bottom-6 left-6 w-14 h-14 bg-white text-slate-950 rounded-2xl flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-2xl hover:bg-emerald-500 hover:text-white">
                      <FiShoppingBag size={22} />
                    </button>
                  )}
                </div>

                <div className="px-2 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                      {product.brand}
                    </span>
                    <div className="flex -space-x-1">
                      {product.colors.map((c) => (
                        <div
                          key={c}
                          className="w-2.5 h-2.5 rounded-full border border-white ring-1 ring-slate-100 shadow-sm"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                  <h4 className="text-slate-900 font-bold text-sm h-10 line-clamp-2 leading-tight">
                    {product.title}
                  </h4>
                  <div className="pt-3 flex justify-between items-center border-t border-slate-50 mt-2">
                    <span className="text-lg font-black text-slate-950">
                      {product.price.toLocaleString()}{" "}
                      <small className="text-[9px] text-slate-400 font-bold">
                        تومان
                      </small>
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500">
                      <FiStar fill="currentColor" /> {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
