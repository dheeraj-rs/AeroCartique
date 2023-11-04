import '../styles/ProductsNavbar.css';

const ProductsNavbar = () => {
  return (
    <div className="navbarr-containeer">
      <div className="navbar-content">
        <h1 className="navbar-title">Trending Furniture</h1>
        <div className="filter-bar">

          <div className="filter-input">
            <input
              type="text"
              placeholder="Search for furniture"
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
          <span></span>

          <div className="filter-options">
            <select className="filter-select">
              <option value="All">All Categories</option>
              <option value="Sofa">Sofa</option>
              <option value="Chair">Chair</option>
              <option value="Table">Table</option>
              <option value="Bed">Bed</option>
            </select>

            <select className="sort-select">
              <option value="Default">Sort by</option>
              <option value="PriceLowToHigh">Price: Low to High</option>
              <option value="PriceHighToLow">Price: High to Low</option>
            </select>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsNavbar;
