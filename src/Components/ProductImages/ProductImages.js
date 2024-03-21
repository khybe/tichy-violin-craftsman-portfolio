import React from "react";
import "./ProductImages.css";

const ProductImages = ({ images }) => {
  return (
    <div className="product-images-container">
      {images.map((image, index) => (
        <div className="product-image" key={index}>
          <img src={image} alt={`Product ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
