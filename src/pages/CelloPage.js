import ProductPageWrapper from "../Components/ProductPageWrapper/ProductPageWrapper";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import ProductImages from "../Components/ProductImages/ProductImages";
import celloPageData from "../Data/celloPageData";

const CelloPage = ({ language }) => {
  return (
    <ProductPageWrapper>
      {/* Displaying product description based on selected language */}
      <ProductDescription description={celloPageData[language]} />
      {/* Displaying product images */}
      <ProductImages images={celloPageData.images} />
    </ProductPageWrapper>
  );
};

export default CelloPage;
