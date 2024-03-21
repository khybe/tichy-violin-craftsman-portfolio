import React from "react";

import ProductPageWrapper from "../Components/ProductPageWrapper/ProductPageWrapper";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import ProductImages from "../Components/ProductImages/ProductImages";
import violaPageData from "../Data/violaPageData";

const ViolaPage = ({ language }) => {
  return (
    <ProductPageWrapper>
      <ProductDescription description={violaPageData[language]} />
      <ProductImages images={violaPageData.images} />
    </ProductPageWrapper>
  );
};

export default ViolaPage;
