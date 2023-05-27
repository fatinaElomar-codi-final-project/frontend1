import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./cart.css";

function Product() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("price-asc");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [category, setCategory] = useState("");
  const allproduct = [...data];
  const { category } = useParams();
  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "http://localhost:8000/dish",
    })
      .then((response) => {
        setData(response.data.response);
        console.log(response.data.response);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const getFilteredProducts = () => {
    let filteredProducts = [...data];

    // filter the data by selected category name
    if (selectedCategory !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.name === selectedCategory
      );
    }

    return filteredProducts;
  };

  const getSortedProducts = () => {
    let sortedProducts = [...getFilteredProducts()];

    switch (sortOption) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "title-asc":
        sortedProducts.sort((a, b) => {
          if (a.title && b.title) {
            return a.title.localeCompare(b.title);
          } else {
            return 0;
          }
        });
        break;
      case "title-desc":
        sortedProducts.sort((a, b) => {
          if (b.title && a.title) {
            return b.title.localeCompare(a.title);
          } else {
            return 0;
          }
        });
        break;
    }

    return sortedProducts;
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  };

  return (
    <div className="Shop-container">
      <div className="products">
        <h1>Products</h1>
        <div className="categories-sort">
          <div className="Categories-links">
            <nav>
              <NavLink to="/Product" onClick={() => setSelectedCategory("")}>
                All Products
              </NavLink>
              <NavLink
                to="/Homemade"
                onClick={() => setSelectedCategory("Homemade")}
              >
                Homemade
              </NavLink>
              <NavLink
                to="/Recycling"
                onClick={() => setSelectedCategory("Recycling")}
              >
                Recycling
              </NavLink>
              <NavLink
                to="/Hygienic"
                onClick={() => setSelectedCategory("Hygienic")}
              >
                Hygienic
              </NavLink>
            </nav>
          </div>
          {/* <ul>
  {getFilteredProducts().map((product) => (
    <li key={product.id}>
      {product.name} - {product.category.name}
    </li>
  ))}
</ul> */}

          <div className="Categories-dropdown">
            <select
              id="categorySelect"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Products</option>
              <option value="Homemade">Homemade</option>
              <option value="Recycling">Recycling</option>
              <option value="Hygienic">Hygienic</option>
            </select>
          </div>

          {/* <div className="search-container">
          <input type="text" placeholder="Search..." onChange={handleSearchChange} />
          <button>Search</button>
        </div> */}
          <div className="sort-options">
            <label htmlFor="sort-select" className="sort">
              Sort by:
            </label>
            <select id="sort-select" onChange={handleSortOptionChange}>
              {/* <option value="price-asc" style={{display:"none"}}>Sort by:</option> */}
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
            </select>
          </div>
        </div>

        <div className="product-container">
          <div className="product-gallery">
            {getSortedProducts().map((item) => (
              <div className="item" key={item._id}>
                <div className="thumbnail">
                  <img
                    className="group"
                    src={`http://localhost:8000${item.dishImage}`}
                    alt={item.name}
                    width="100%"
                    height="363"
                  />
                  <div className="caption">
                    <h4 className="group-inner">{item.name}</h4>
                    <p className="lead">${item.price}</p>
                  </div>
                  <div className="product-rate">
                    {item.reviews && item.reviews.length > 0 ? (
                      <div className="rating-and-reviews">
                        <div className="rating">
                          {[...Array(5)].map((_, index) => (
                            <span
                              className={`star ${
                                index < Math.floor(item.reviews[0].rating)
                                  ? "filled"
                                  : ""
                              }`}
                              key={index}
                            >
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                          ))}
                        </div>
                        <div className="rate-number">
                          <p>{`${item.reviews.length} review(s)`}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="no-review">No reviews </div>
                    )}
                  </div>

                  {/* </div> */}
                  <div className="btn-group">
                    <NavLink
                      to={{
                        pathname: `/OneProduct/${item._id}`,
                        // search: `?allproduct=${JSON.stringify(allproduct)}`,
                      }}
                      className="btn btn-details"
                    >
                      View
                    </NavLink>

                    <NavLink to="/" className="btn btn-success">
                      Add to Cart
                    </NavLink>
                  </div>
                  <NavLink to="/" className="btn btn-icon">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#" class="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>
  );
}
export default Product;