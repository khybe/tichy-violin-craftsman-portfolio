import React from "react";
import "./ProductImages.css";

const ProductImages = ({ images }) => {
  return (
    <div className="product-images-container">
      <div className="product-image">
        <img src={images[0]} alt="Violin" />
      </div>
      <div className="product-image">
        <img src={images[1]} alt="Violin" />
      </div>
    </div>
  );
};

export default ProductImages;
