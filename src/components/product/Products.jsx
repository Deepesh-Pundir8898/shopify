import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setSelectedCategory } from "../../redux/productSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./product.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const selectedCategory = useSelector(
    (state) => state.product.selectedCategory
  );

  // Fetch all products
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(setProducts(response.data)); // Dispatch products to the store
    });
  }, [dispatch]);

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className={styles.products}>
      <div className={styles.category}>
        <h2>Categories</h2>
        <ul>
          {/* Display all categories */}
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => dispatch(setSelectedCategory(category))} // Dispatch the selected category
              style={{
                cursor: "pointer",
                fontWeight: selectedCategory === category ? "bold" : "normal",
              }}
            >
              {category}
            </li>
          ))}
          {/* Add an option to show all products */}
          <li
            onClick={() => dispatch(setSelectedCategory(null))} // Reset selected category
            style={{
              cursor: "pointer",
              fontWeight: !selectedCategory ? "bold" : "normal",
            }}
          >
            All Products
          </li>
        </ul>
      </div>
      <div className={styles.productList}>
        <h2>{selectedCategory || "All Products"}</h2>
        <div className={styles.productItems}>
          <ul>
            {/* Display filtered products */}
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
