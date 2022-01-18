import React from "react";
import { getCartItems, removeItem } from "../../reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import {
  ShoppingCartContainer,
  ShoppingLists,
  TotalResult,
  ProductItemContainer,
  Body,
  Title,
  Image,
  ImageContainer,
  Price,
  Quantity,
  RemoveContainer,
  Details,
  MainTitle,
  Nothing,
} from "./ShoppingCart-styles";
import Result from "../Result/Result";

const ShoppingCart = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const items = JSON.parse(localStorage.getItem("Cart"));
  console.log(items);

  return (
    <>
      <ShoppingCartContainer>
        <MainTitle>Product Lists</MainTitle>
        <Body>
          <ShoppingLists>
            {cartItems.length === 0 ? (
              <Nothing>No Items</Nothing>
            ) : (
              <>
                {cartItems.map((cartItem) => (
                  <ProductItemContainer key={cartItem.id}>
                    <Details>
                      <ImageContainer>
                        <Image src={cartItem.img} />
                      </ImageContainer>
                      <Title>Name : {cartItem.title}</Title>
                      <Quantity>Quantity : {cartItem.quantity}</Quantity>
                      <Price>Price : ${cartItem.totalPrice}</Price>
                    </Details>
                    <RemoveContainer
                      onClick={() =>
                        dispatch(removeItem({ cartItemId: cartItem.id }))
                      }
                    >
                      Remove
                    </RemoveContainer>
                  </ProductItemContainer>
                ))}
              </>
            )}
          </ShoppingLists>
          <TotalResult>
            <Result />
          </TotalResult>
        </Body>
        <Footer />
      </ShoppingCartContainer>
    </>
  );
};

export default ShoppingCart;
