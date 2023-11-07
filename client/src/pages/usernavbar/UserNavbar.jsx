import { Search, ViewSidebar } from "@mui/icons-material";
import {
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
import "./styles/UserNavbar.css";
import { useNavigate } from "react-router-dom";

function UserNavbar() {
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
        <ViewSidebar className="ViewSidebar" />
        <span></span>
        <div className="nav-arrow">
          <ArrowBack onClick={navigateToPreviousPage} />
          <ArrowForward onClick={navigateToNextPage} />
        </div>
      </div>
      <h1>AeroCartique.</h1>

      <div className="pinned-list">
        <div onClick={() => navigate("/")}>
          <Home style={{ backgroundColor: "transparent" }} />
          {/* <a>Home</a> */}
        </div>
        <div onClick={() => navigate("/cart")}>
          <ShoppingCart style={{ backgroundColor: "transparent" }} />
          {/* <a>Cart</a> */}
        </div>
        <div onClick={() => navigate("/wishlist")}>
          <Favorite style={{ backgroundColor: "transparent" }} />
          {/* <a>Wishlist</a> */}
        </div>
      </div>
      <main className="nav-list">
        <div onClick={() => navigate("/categories")}>
          <Category style={{ backgroundColor: "transparent" }} />
          <a>Categories</a>
        </div>
        <div onClick={() => navigate("/products")}>
          <ShoppingBag style={{ backgroundColor: "transparent" }} />
          <a>Products</a>
        </div>
        {/* <div onClick={() => navigate("/service")}>
          <DesignServices style={{ backgroundColor: "transparent" }} />
          <a>Service</a>
        </div>
        <div onClick={() => navigate("/delivery")}>
          <DeliveryDining style={{ backgroundColor: "transparent" }} />
          <a>Delivery</a>
        </div> */}
        <div onClick={() => navigate("/profile")}>
          <ManageAccounts style={{ backgroundColor: "transparent" }} />
          <a>Profile</a>
        </div>
        <div onClick={() => navigate("/contact")}>
          <ContactPhone style={{ backgroundColor: "transparent" }} />
          <a>Contact</a>
        </div>
        <div onClick={() => navigate("/setings")}>
          <Settings style={{ backgroundColor: "transparent" }} />
          <a>Settings</a>
        </div>
        <div onClick={() => navigate("/auth")}>
          <Logout style={{ backgroundColor: "transparent" }} />
          <a>Logout</a>
        </div>
        <hr className="horizondelline" />
        <div onClick={() => navigate("/searchtab")} className="search-nav">
          <Search style={{ backgroundColor: "transparent" }} />
          <a>Search Tab</a>
        </div>
        <span></span>
        <hr className="horizondelline" />

        <footer
          className="footer-navbar"
          onClick={() => navigate("/CustomColorSelector")}
        ></footer>
      </main>
    </section>
  );
}

export default UserNavbar;
