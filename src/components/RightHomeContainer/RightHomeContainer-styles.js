import styled from "styled-components";
import { mobile } from "./../responsive";

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  font-family: "Mochiy Pop P One", sans-serif;
  ${mobile({ fontSize: "24px" })}
`;

export const TextOne = styled.h3`
  margin-bottom: 20px;
  font-family: "Titillium Web", sans-serif;
  ${mobile({ fontSize: "14px" })}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

export const OrderButton = styled.button`
  font-family: "Mochiy Pop P One", sans-serif;
  font-size: 24px;
  border: none;
  outline: none;
  background-color: #a6b98b;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  ${mobile({ fontSize: "16px" })}
`;
