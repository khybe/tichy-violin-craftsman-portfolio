import React from "react";
import "./ProductImages.css";

// Component for displaying product images
const ProductImages = ({ images, className }) => {
  return (
    <div className="product-images-container">
      {images.map((image, index) => (
        <div className={`product-image ${className}`} key={index}>
          <img src={image} alt={`Product ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
