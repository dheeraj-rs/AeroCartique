import { ArrowForward, Search } from "@mui/icons-material";
import "./styles/SearchTab.css";

function SearchTab() {
  return (
    <section className="search-container">
      <main className="search-box">
        <div className="search-nav">
          <input type="text" placeholder="Search for items..." className="search-input" />
          <Search className="search-icon" />
        </div>
        {/* <hr className="horizontal-line" /> */}
        <div className="search-out-list">
          <div className="search-item-image"></div>
          <div className="search-item-details">
            <p className="search-item-name">Item Name</p>
            <p className="search-item-description">Item Description</p>
          </div>
          <ArrowForward className="arrow-icon" />
        </div>
      </main>
    </section>
  );
}

export default SearchTab;
