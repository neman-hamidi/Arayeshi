import Header from "./components/header/header";
import Category from "./components/category/category";
import BestSale from "./components/bestSale/bestSale";
import Article from "./components/article/article";
import Trust from "./components/trust/Trust"
import Comments from "./components/comments/comments";
import UseProduct from "./components/use/UseProduct"
export default function Home() {
  return (
    <>
      <Header />
      <Category />
      <UseProduct/>
      <BestSale />
      <Trust/>
      <Article />
      <Comments />
    </>
  );
}
