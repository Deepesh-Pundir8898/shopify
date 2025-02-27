import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./productDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((product) => product.id === parseInt(id))
  );

  return (
    <div className={style.productDetailsContainer}>
      <h1>{product?.category}</h1>
      <div className={style.productDetails}>
        <div className={style.imageContainer}>
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className={style.detailsContainer}>
          <p>
            <strong>Title:</strong> {product?.title}
          </p>
          <p>
            <strong>Price:</strong> $ {product?.price}
          </p>
          <p>
            <strong>Description:</strong> {product?.description}
          </p>
          <p>
            <strong>Category:</strong> {product?.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
