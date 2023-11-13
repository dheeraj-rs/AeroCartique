import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/UserNavbar.css";
import {
  ColorLens,
  Search,
  ViewSidebar,
  Home,
  ShoppingBag,
  Category,
  Logout,
  ManageAccounts,
  ShoppingCart,
  ContactPhone,
  Settings,
  Favorite,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";

function UserNavbar({ openPopup, autoNavbar }) {
  const navigate = useNavigate();

  const navigateToPreviousPage = () => {
    navigate(-1);
  };

  const navigateToNextPage = () => {
    navigate(1);
  };

  return (
    <section className="navbar-container">
      <div className="nav-controller">
        <ViewSidebar className="ViewSidebar" onClick={() => autoNavbar()} />
        <span></span>
        <div className="nav-arrow-icon">
          <ArrowBack onClick={navigateToPreviousPage} />
          <ArrowForward onClick={navigateToNextPage} />
        </div>
      </div>
      <h1>AeroCartique.</h1>
      <div className="pinned-list">
        <div onClick={() => navigate("/")}>
          <Home style={{ backgroundColor: "transparent" }} />
        </div>
        <div onClick={() => openPopup("Cart")}>
          <ShoppingCart style={{ backgroundColor: "transparent" }} />
        </div>
        <div onClick={() => openPopup("Wishlist")}>
          <Favorite style={{ backgroundColor: "transparent" }} />
        </div>
      </div>
      <main className="nav-list">
        <div onClick={() => navigate("/categories")}>
          <Category style={{ backgroundColor: "transparent" }} />
          <a>Categories</a>
        </div>
        <div onClick={() => navigate("/contact")}>
          <ContactPhone style={{ backgroundColor: "transparent" }} />
          <a>Contact</a>
        </div>
        <div onClick={() => navigate("/products")}>
          <ShoppingBag style={{ backgroundColor: "transparent" }} />
          <a>Products</a>
        </div>
        <div onClick={() => openPopup("profile")}>
          <ManageAccounts style={{ backgroundColor: "transparent" }} />
          <a>Profile</a>
        </div>
        <div onClick={() => openPopup("Settings")}>
          <Settings style={{ backgroundColor: "transparent" }} />
          <a>Settings</a>
        </div>
        <div onClick={() => navigate("/auth")}>
          <Logout style={{ backgroundColor: "transparent" }} />
          <a>Logout</a>
        </div>
        <hr className="horizondelline" />
        <div className="search-nav" onClick={() => openPopup("searchtab")}>
          <Search style={{ backgroundColor: "transparent" }} />
          <a>Search Tab</a>
        </div>
      </main>
      <footer className="footer-navbar">
        <div className="customcolor" onClick={() => openPopup("customcolor")}>
          <ColorLens />
        </div>
      </footer>
    </section>
  );
}

UserNavbar.propTypes = {
  openPopup: PropTypes.func.isRequired,
  autoNavbar: PropTypes.func.isRequired,
};

export default UserNavbar;
