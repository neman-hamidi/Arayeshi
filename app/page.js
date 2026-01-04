import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Category from "./components/category/category";
import BestSale from "./components/bestSale/bestSale";
import Article from "./components/article/article";
import Comments from "./components/comments/comments";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Category />
      <BestSale />
      <Article />
      <Comments />
      <Footer />
    </>
  );
}
