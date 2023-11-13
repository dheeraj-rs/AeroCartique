import { useState } from "react";
import UserScreens from "../../router/UserScreens";
import "./styles/UserPage.css";
import Cart from "../../screens/cart/Cart";
import Wishlist from "../../screens/wishlist/Wishlist";
import Setings from "../../screens/setings/Setings";
import UserNavbar from "../usernavbar/UserNavbar";
import SearchTab from "../../screens/searchtab/SearchTab";
import Profile from "../../screens/profile/Profile";
import Theme from "../../screens/theme/Theme";

function UserPage() {
  const [activePopup, setActivePopup] = useState(null);
  const [activeNavbar, setActiveNavbar] = useState(false);

  const openPopup = (popupType) => {
    setActivePopup((prevPopup) => (prevPopup === popupType ? null : popupType));
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const autoNavbar = () => {
    setActiveNavbar(!activeNavbar);
  };

  const renderActivePopup = () => {
    switch (activePopup) {
      case "Cart":
        return <Cart closePopup={closePopup} />;
      case "Wishlist":
        return <Wishlist closePopup={closePopup} />;
      case "Settings":
        return <Setings closePopup={closePopup} />;
      case "customcolor":
        return <Theme closePopup={closePopup} />;
      case "searchtab":
        return <SearchTab closePopup={closePopup} />;
      case "profile":
        return <Profile closePopup={closePopup} />;
      default:
        return null;
    }
  };

  return (
    <div className="userpage-container">
      <div className={`${activeNavbar ? "auto-user-navbar" : "user-navbar"}`}>
        <UserNavbar openPopup={openPopup} autoNavbar={autoNavbar} />
      </div>
      <div
        className={`${activeNavbar ? "auto-user-screens" : "user-screens"} `}
      >
        <UserScreens />
        {activePopup && (
          <>
            <div className={`backdrop`} onClick={closePopup}>
              {" "}
            </div>
            <div
              className={`${
                activeNavbar
                  ? "auto-user-popupscreen-container"
                  : "user-popupscreen-container"
              } `}
            >
              {renderActivePopup()}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserPage;
