import React from "react";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  LinksContainer,
  OverlayContainer,
  HomeLink,
  ProductsLink,
  ShoppingCartLink,
  CloseIconContainer,
  Title,
} from "./Overlay-styles";

const Overlay = ({ handleMenuClicked, menuClicked }) => {
  return (
    <>
      <OverlayContainer>
        <CloseIconContainer>
          <Close onClick={handleMenuClicked} fontSize="large" />
        </CloseIconContainer>
        <Title>Linear Shopping</Title>
        <LinksContainer menuClicked={menuClicked}>
          <Link
            to="/"
            onClick={handleMenuClicked}
            style={{ textDecoration: "none" }}
          >
            <HomeLink>Home</HomeLink>
          </Link>
          <Link
            to="/products"
            onClick={handleMenuClicked}
            style={{ textDecoration: "none" }}
          >
            <ProductsLink>Products</ProductsLink>
          </Link>
          <Link
            to="/shopping-cart"
            onClick={handleMenuClicked}
            style={{ textDecoration: "none" }}
          >
            <HomeLink>
              <ShoppingCartLink>Shopping Cart</ShoppingCartLink>
            </HomeLink>
          </Link>
        </LinksContainer>
      </OverlayContainer>
    </>
  );
};

export default Overlay;
