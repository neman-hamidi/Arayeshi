import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
const icons = [
  {
    icon: (
      <FaInstagram className="hover:text-purple-700  transition-colors duration-300" />
    ),
  },
  { icon: <FaXTwitter /> },
  {
    icon: (
      <BiLogoTelegram className="hover:text-blue-600 transition-colors duration-300" />
    ),
  },
];
const lis = [
  {
    title: "صفحه اصلی",
    className: "text-lg hover:text-green-400 transition-colors duration-300",
  },
  {
    title: "فروشگاه",
    className: "text-base hover:text-green-400 transition-colors duration-300",
  },
  {
    title: "پیگیری سفارشات",
    className: "text-base hover:text-green-400 transition-colors duration-300",
  },
  {
    title: "درباره ما",
    className: "text-base hover:text-green-400 transition-colors duration-300",
  },
  {
    title: "تماس با ما",
    className: "text-base hover:text-green-400 transition-colors duration-300",
  },
];
export { icons, lis };
