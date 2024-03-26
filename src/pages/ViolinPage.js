import ProductPageWrapper from "../Components/ProductPageWrapper/ProductPageWrapper";
import violinPageData from "../Data/violinPageData";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import ProductImages from "../Components/ProductImages/ProductImages";

const ViolinPage = ({ language }) => {
  return (
    <ProductPageWrapper>
      {/* Displaying product description based on selected language */}
      <ProductDescription description={violinPageData[language]} />
      {/* Displaying product images */}
      <ProductImages images={violinPageData.images} />
    </ProductPageWrapper>
  );
};

export default ViolinPage;
