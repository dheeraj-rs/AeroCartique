import "./styles/Wishlist.css";
import PropTypes from "prop-types";

function Wishlist(closePopup) {
  return (
    <section className="wishlist-container">
      <div className="wishlist-navbar">
        <p>Wishlist (0)</p>{" "}
        <p className="wishlist-close-btn" onClick={() => closePopup()}>
          close
        </p>
      </div>
    </section>
  );
}
Wishlist.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default Wishlist;
