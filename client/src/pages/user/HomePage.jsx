import Navbar from "../../utils/navbar/Navbar";
import ProductList from "../../utils/products/ProductList";
import Footer from "../../utils/footer/Footer";

function HomePage() {
  return (
    <section className="homepage-container">
      <Navbar />
      <ProductList />
      <Footer />
    </section>
  );
}

export default HomePage;
