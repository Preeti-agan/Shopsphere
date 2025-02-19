import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  products,
  searchTerm,
}) => {
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <header>
      <div className="header-top">
        <marquee direction="left">
          <span className="header-top-span">
            BOGO: Buy a watch, get an additional 50% off eyewear{" "}
            <span className="code">#CODE: BOGO_50</span>
          </span>
        </marquee>
      </div>
      <nav className="navbar">
        <div className="containers">
          <div className="navbar-content">
            <div className="navbar-left">
              <Link to="/" className="navbar-brand">
                ShopSphere
              </Link>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-right">
              <form className="search-form" onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Search"
                  className="form-control"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <select
                className="form-select"
                value={categoryFilter}
                onChange={handleCategoryChange}
              >
                <option value="all">All Categories</option>
                {[...new Set(products.map((p) => p.category))].map(
                  (category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
