import ProductPageWrapper from "../Components/ProductPageWrapper/ProductPageWrapper";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import ProductImages from "../Components/ProductImages/ProductImages";
import violaPageData from "../Data/violaPageData";

const ViolaPage = ({ language }) => {
  return (
    <ProductPageWrapper>
      {/* Displaying product description based on selected language */}
      <ProductDescription description={violaPageData[language]} />
      {/* Displaying product images */}
      <ProductImages images={violaPageData.images} />
    </ProductPageWrapper>
  );
};

export default ViolaPage;
