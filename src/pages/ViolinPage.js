import React from "react";

import ProductPageWrapper from "../Components/ProductPageWrapper/ProductPageWrapper";
import violinPageData from "../Data/violinPageData";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import ProductImages from "../Components/ProductImages/ProductImages";

const ViolinPage = ({ language }) => {
  return (
    <ProductPageWrapper>
      <ProductDescription description={violinPageData[language]} />
      <ProductImages images={violinPageData.images} />
    </ProductPageWrapper>
  );
};

export default ViolinPage;
