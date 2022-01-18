import {
  MainTitle,
  ProductContainer,
  LeftButton,
  RightButton,
  ProductItemContainer,
} from "./ProductItems-styles.js";
import {
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../ProductItem/ProductItem.jsx";

const ProductItems = ({ products }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClickedButton = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 15);
    } else {
      setSlideIndex(slideIndex < 15 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <ProductItemContainer>
        <MainTitle>Products</MainTitle>
        <ProductContainer index={slideIndex}>
          <LeftButton onClick={() => handleClickedButton("left")}>
            <ArrowCircleLeftOutlined fontSize="large" />
          </LeftButton>
          <RightButton onClick={() => handleClickedButton("right")}>
            <ArrowCircleRightOutlined fontSize="large" />
          </RightButton>
          {products.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              slideIndex={slideIndex}
            />
          ))}
        </ProductContainer>
        <Footer />
      </ProductItemContainer>
    </>
  );
};

export default ProductItems;
