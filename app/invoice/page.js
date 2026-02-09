"use client";
import { motion } from "framer-motion";
import { FiDownload, FiPrinter, FiCheck, FiShield } from "react-icons/fi";
import { invoiceData } from "./Text";
const InvoicePage = () => {
  return (
    <main
      className="min-h-screen bg-[#050505] flex items-center justify-center pt-28 pb-20 px-6 font-[vazir] relative overflow-hidden"
      dir="rtl"
    >
      {/* پس‌زمینه متحرک برای نمایش افکت شیشه */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-3xl"
      >
        {/* بدنه اصلی فاکتور با استایل گلس‌مورفیسم */}
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[4rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          {/* بخش هدر فاکتور */}
          <div className="p-12 border-b border-white/5 bg-white/[0.02]">
            <div className="flex justify-between items-start mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-500 font-black tracking-widest text-[10px] uppercase">
                  <FiShield /> Official Digital Receipt
                </div>
                <h1 className="text-3xl font-black text-white">
                  فاکتور خدمات{" "}
                  <span className="font-light italic text-slate-400">VIP</span>
                </h1>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  شماره فاکتور
                </p>
                <p className="text-xl font-light text-white tracking-tighter">
                  #{invoiceData.id}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                  صورتحساب برای
                </p>
                <p className="text-white font-bold">{invoiceData.customer}</p>
                <p className="text-slate-400 text-xs mt-1 italic">
                  عضو سطح دایموند
                </p>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                  تاریخ ثبت
                </p>
                <p className="text-white font-bold tracking-widest">
                  {invoiceData.date}
                </p>
              </div>
            </div>
          </div>

          {/* لیست اقلام */}
          <div className="p-12 space-y-8">
            <table className="w-full text-right">
              <thead>
                <tr className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5">
                  <th className="pb-4 font-black">شرح خدمات / محصولات</th>
                  <th className="pb-4 text-left font-black">مبلغ (تومان)</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {invoiceData.items.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/[0.02] group"
                  >
                    <td className="py-6 text-sm font-medium group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </td>
                    <td className="py-6 text-left font-light tracking-tighter">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* بخش محاسبات نهایی */}
            <div className="flex justify-end pt-8">
              <div className="w-full md:w-64 space-y-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">جمع کل:</span>
                  <span className="text-white font-bold">۱۳,۵۰۰,۰۰۰</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-500">
                  <span className="font-bold uppercase tracking-widest text-[9px]">
                    تخفیف وفاداری:
                  </span>
                  <span className="font-bold">({invoiceData.discount}-)</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">
                    مبلغ قابل پرداخت:
                  </span>
                  <span className="text-3xl font-black text-emerald-500 tracking-tighter">
                    {invoiceData.total}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* فوتر فاکتور با پرفراژ تزئینی */}
          <div className="relative p-12 bg-white/[0.02] border-t border-white/5">
            {/* افکت خط برش */}
            <div className="absolute top-[-1px] left-0 w-full flex justify-center gap-2 overflow-hidden opacity-20">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="min-w-[10px] h-[2px] bg-white" />
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4 text-emerald-500">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <FiCheck size={20} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest">
                  پرداخت با موفقیت انجام شد
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                  <FiPrinter /> چاپ
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-emerald-500 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                  <FiDownload /> دریافت PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* پیام نهایی پایین فاکتور */}
        <p className="text-center mt-12 text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
          Thank you for choosing excellence • Sevin Skin Clinic
        </p>
      </motion.div>
    </main>
  );
};

export default InvoicePage;
