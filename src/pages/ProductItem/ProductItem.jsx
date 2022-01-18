import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CartContainer,
  CartImgContainer,
  CartImg,
  CartPrice,
  CartDesContainer,
  CartTitle,
  DetailsContainer,
  DetailsButton,
  Added,
} from "./Producttem-styles";
import { getCartItems } from "../../reducers/cartSlice";

const ProductItem = ({ product, slideIndex }) => {
  const cartItems = useSelector(getCartItems);
  const findItem = cartItems.find(
    (cartItem) => cartItem.productId === product.id
  );
  return (
    <>
      <CartContainer index={slideIndex}>
        <CartImgContainer>
          <CartImg src={product.image} />
          <CartPrice>${product.price}</CartPrice>
          {findItem && <Added>Added</Added>}
        </CartImgContainer>
        <CartDesContainer>
          <CartTitle>{product.title}</CartTitle>
        </CartDesContainer>
        <DetailsContainer>
          <Link to={`/products/${product.id}`}>
            <DetailsButton>View Details</DetailsButton>
          </Link>
        </DetailsContainer>
      </CartContainer>
    </>
  );
};

export default ProductItem;
