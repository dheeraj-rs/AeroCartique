import "./styles/Categories.css";
import categorie from "../../../src/assets/images/home_sm_bg.jpg";
import { ArrowForward } from "@mui/icons-material";
function Categories() {
  return (
    <section className="categories-container">
      <div className="categories-list">
      <h1>Our Categories</h1>
      <p className="categories-subtitle">
        Shop our furniture by category for an easy and streamlined shopping
        experience
      </p>
      <ul className="">
        <li>
          Chair
          <ArrowForward />
        </li>
        <li>
          <p>Bed</p>
          <ArrowForward />
        </li>
        <li>
          <p>Table</p>
          <ArrowForward />
        </li>
        <li>
          <p>Wardrobe</p>
          <ArrowForward />
        </li>
        <li>
          <p>Sofa</p>
          <ArrowForward />
        </li>
      </ul>
      </div>
      <div className="image-container">
        <img src={categorie} alt="" />
      </div>
    </section>
  );
}

export default Categories;
