import React from "react";
import "./ProductPageWrapper.css";

// Wrapper component for product pages
const ProductPageWrapper = ({ children }) => {
  return <section className="product-page-wrapper">{children}</section>;
};

export default ProductPageWrapper;
