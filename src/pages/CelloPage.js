import React from "react";

import ProductPageWrapper from "../Components/ProductPageWrapper/ProductPageWrapper";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import ProductImages from "../Components/ProductImages/ProductImages";
import celloPageData from "../Data/celloPageData";

const CelloPage = ({ language }) => {
  return (
    <ProductPageWrapper>
      <ProductDescription description={celloPageData[language]} />
      <ProductImages images={celloPageData.images} />
    </ProductPageWrapper>
  );
};

export default CelloPage;
