import React from "react";

import ProductPageWrapper from "../Components/ProductPageWrapper/ProductPageWrapper";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import ProductImages from "../Components/ProductImages/ProductImages";
import gambaPageData from "../Data/gambaPageData";
import "./CSS/GambaPage.css";

const GambaPage = ({ language }) => {
  return (
    <ProductPageWrapper>
      {/* Displaying product description based on selected language */}
      <ProductDescription description={gambaPageData[language]} />
      {/* Displaying product images with custom class */}
      <ProductImages
        images={gambaPageData.images}
        className="gamba-image-container"
      />
    </ProductPageWrapper>
  );
};

export default GambaPage;
