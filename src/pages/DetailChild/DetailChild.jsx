import React, { useState } from "react";
import {
  DetailsContainer,
  Right,
  Left,
  ProductImg,
  Img,
  ProductName,
  DescriptionContainer,
  TextDesc,
  ContainerDesc,
  DetailsInfo,
  TextContainer,
  AddIcon,
  ButtonContainer,
  QuantityButtonContainer,
  Decrease,
  Increase,
  Quantity,
  AddToCartContainer,
  AddToCartText,
} from "./DetailChild-styles";
import {
  RemoveCircleOutline,
  AddCircleOutline,
  AddShoppingCart,
} from "@mui/icons-material";
import { addItemToCart, getCartItems } from "../../reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";

const DetailChild = ({ product }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(() => !open);
  };

  const increaseQuantity = () => setQuantity(() => quantity + 1);
  const decreaseQuantity = () => setQuantity(() => quantity - 1);

  //Check the product from the store and  the cart product
  const checked = cartItems.filter(
    (cartItem) => cartItem.productId === product.id
  );

  return (
    <>
      <DetailsContainer>
        <Left>
          <ProductImg>
            <Img src={product.image} />
          </ProductImg>
        </Left>
        <Right>
          <DetailsInfo>
            <ProductName>{product.title}</ProductName>
            <DescriptionContainer>
              <TextContainer>
                <TextDesc onClick={handleOpen}>
                  {open ? "View" : "Close"} Description
                  <AddIcon>{open ? <Add /> : <Remove />}</AddIcon>
                </TextDesc>
              </TextContainer>
              <ContainerDesc open={open}>{product.description}</ContainerDesc>
              <ButtonContainer>
                <QuantityButtonContainer>
                  <Decrease
                    onClick={decreaseQuantity}
                    disabled={quantity === 1 ? true : false}
                  >
                    <RemoveCircleOutline />
                  </Decrease>
                  <Quantity>{quantity}</Quantity>
                  <Increase onClick={increaseQuantity}>
                    <AddCircleOutline />
                  </Increase>
                </QuantityButtonContainer>
                <AddToCartContainer
                  onClick={() => {
                    setClick(() => !click);
                    if (click === false)
                      dispatch(
                        addItemToCart({ product, quantity, click: true })
                      );
                  }}
                  disabled={checked.length ? true : false}
                >
                  <AddToCartText>Add To Cart</AddToCartText>
                  <AddShoppingCart />
                </AddToCartContainer>
              </ButtonContainer>
            </DescriptionContainer>
          </DetailsInfo>
        </Right>
      </DetailsContainer>
    </>
  );
};

export default DetailChild;
