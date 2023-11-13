import PropTypes from 'prop-types';
import "./styles/Cart.css";

function Cart({ closePopup }) {
  return (
    <section className="cart-container">
      <div className="cart-navbar">
        <p>Cart (0)</p>
        <p className="cart-close-btn" onClick={() => closePopup()}>close</p>
      </div>
    </section>
  );
}

Cart.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default Cart;
