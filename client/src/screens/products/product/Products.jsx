import "../styles/Products.css";
import { Link } from "react-router-dom";
import { Favorite, ViewColumn } from "@mui/icons-material";
import ProductsNavbar from "../productsnavbar/Productsnavbar";
import { useEffect, useState } from "react";
import { useRef } from "react";
import {useTransform, useScroll } from "framer-motion";

function Products() {
  const [isGridView, setIsGridView] = useState(true);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
useEffect(() => {
  console.log("🚀 ~ file: Products.jsx:18 ~ Products ~ x:", x)

},[x])

  const active = [
    {
      title: "Product 1",
      price: 242,
      priceMRP: 333,
      Discount: 546,
      offer: 435,
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/social-media-icons-wordpress.png",
    },
    {
      title: "Product 2",
      price: 242,
      priceMRP: 333,
      Discount: 546,
      offer: 435,
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/social-media-icons-wordpress.png",
    },
    {
      title: "Product 3",
      price: 242,
      priceMRP: 333,
      Discount: 546,
      offer: 435,
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/social-media-icons-wordpress.png",
    },
    {
      title: "Product 3",
      price: 242,
      priceMRP: 333,
      Discount: 546,
      offer: 435,
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/social-media-icons-wordpress.png",
    },
    {
      title: "Product 3",
      price: 242,
      priceMRP: 333,
      Discount: 546,
      offer: 435,
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/social-media-icons-wordpress.png",
    },
    {
      title: "Product 3",
      price: 242,
      priceMRP: 333,
      Discount: 546,
      offer: 435,
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/social-media-icons-wordpress.png",
    },
    {
      title: "Product 3",
      price: 242,
      priceMRP: 333,
      Discount: 546,
      offer: 435,
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/social-media-icons-wordpress.png",
    },
    {
      title: "Product 3",
      price: 242,
      priceMRP: 333,
      Discount: 546,
      offer: 435,
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/social-media-icons-wordpress.png",
    },
  ];



  return (
    <section className="products-container" >
      <div className="products-navbar">
        <ProductsNavbar />
      </div>
      <div className="adjesting-div">
        <button onClick={()=>setIsGridView(!isGridView)}><ViewColumn/></button>
      </div>

      <div className={` ${isGridView ? "table" : "list-view"}`} ref={targetRef} >
     
        {active.map((item, index) => (
          <div className="cell" key={index} >
            <div className="product-image-container">
              <Link to="/productpage">
                <img src={item.image} alt="img" className="product-image" />
              </Link>
              <Favorite className="favorite-icon" />
            </div>
            <div className="product-details-container">
              <p className="product-title">{item.title}</p>
              <div className="product-rating"></div>
              <div className="product-price">
                <p className="price-label">Price ₹{item.price}</p>
                <p>
                  <span className="price-mrp">{item.priceMRP}</span>
                </p>
              </div>
              <span className="discount-text">{item.Discount}% off</span>
              <p className="offer-text">{item.offer}</p>
              <p className="delivery-text">Free delivery</p>
              <div className="action-buttons">
                <button className="add-to-cart-button">ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
