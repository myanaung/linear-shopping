import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  TextOne,
  OrderButton,
} from "./RightHomeContainer-styles";

const RightHomeContainer = () => {
  return (
    <Container>
      <Title>We make daily life easy.</Title>
      <TextOne>Free Delivery With Good Quality Products</TextOne>
      <Link to={`/products`}>
        <OrderButton>Order Now</OrderButton>
      </Link>
    </Container>
  );
};

export default RightHomeContainer;
