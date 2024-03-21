import React from "react";
import "./ProductDescription.css";

const ProductDescription = ({ description }) => {
  return (
    <div className="product-description">
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
