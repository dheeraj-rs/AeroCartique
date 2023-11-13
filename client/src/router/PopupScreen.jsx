import { Route, Routes } from "react-router-dom";
import Delivery from "../screens/delivery/Delivery";
import Cart from "../screens/cart/Cart";
import Wishlist from "../screens/wishlist/Wishlist";
import Profile from "../screens/profile/Profile";
import Setings from "../screens/setings/Setings";
import Login from "../screens/Auth/Login";
import SearchTab from "../screens/searchtab/SearchTab";
import ColorApp from "../screens/theme/Theme";

function PopupScreen() {
  return (
    <Routes>
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setings" element={<Setings />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/searchtab" element={<SearchTab />} />
      <Route path="/CustomColorSelector" element={<ColorApp />} />
    </Routes>
  );
}

export default PopupScreen;
