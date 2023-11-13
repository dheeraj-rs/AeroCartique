import { Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import Categories from "../screens/categories/Categories";
import Products from "../screens/products/product/Products";
import Contact from "../screens/contact/Contact";
import SearchTab from "../screens/searchtab/SearchTab";
import ColorApp from "../screens/theme/Theme";

function UserScreens() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/searchtab" element={<SearchTab />} />
      <Route path="/CustomColorSelector" element={<ColorApp />} />
    </Routes>
  );
}

export default UserScreens;
