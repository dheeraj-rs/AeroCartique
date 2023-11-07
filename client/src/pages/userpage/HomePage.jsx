import { Route, Routes } from "react-router-dom";
import "./styles/HomePage.css";
import Cart from "../../screens/cart/Cart";
import Home from "../../screens/home";
import Login from "../../screens/Auth/Login";
import Setings from "../../screens/setings/Setings";
import Contact from "../../screens/contact/Contact";
import Profile from "../../screens/profile/Profile";
import Wishlist from "../../screens/wishlist/Wishlist";
import Delivery from "../../screens/delivery/Delivery";
import Products from "../../screens/products/Products";
import Categories from "../../screens/categories/Categories";
import UserNavbar from "../usernavbar/Usernavbar";
import SearchTab from "../../screens/searchtab/SearchTab";
import ColorApp from "../../screens/colorselector/ColorApp";
import { useState } from "react";

function HomePage() {
  const [selectedColor, setSelectedColor] = useState('');
  const applyColor = (color) => {
    setSelectedColor(color);
  };
  return (
    <div className="homepage-container dark-mode" style={{ backgroundColor: selectedColor }}>
      <div className="screencontrol-container">
        <UserNavbar />
      </div>
      <div className="home-main-container">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/setings" element={<Setings />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/searchtab" element={<SearchTab />} /> 
          <Route path="/CustomColorSelector" element={<ColorApp onSelectColor={applyColor} />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
