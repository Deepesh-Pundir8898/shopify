import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((product) => product.id === parseInt(id))
  );

  return (
    <div>
      <h1>Product Details</h1>
      <p>Title: {product?.title}</p>
      <p>Price: {product?.price}</p>
      <p>Description: {product?.description}</p>
      <p>Category: {product?.category}</p>
      <img src={product?.image} alt={product?.title} />
    </div>
  );
};

export default ProductDetails;
