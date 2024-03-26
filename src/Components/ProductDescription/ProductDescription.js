import React from "react";
import "./ProductDescription.css";

// Component for displaying product description
const ProductDescription = ({ description }) => {
  return (
    <div className="product-description">
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
