import React from "react";
import "./ProductPageWrapper.css";

const ProductPageWrapper = ({ children }) => {
  return <section className="product-page-wrapper">{children}</section>;
};

export default ProductPageWrapper;
