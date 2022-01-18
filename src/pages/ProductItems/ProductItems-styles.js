import styled from "styled-components";
import { mobile } from "../../components/responsive";

export const ProductItemContainer = styled.div``;

export const ProductContainer = styled.div`
  max-width: 98%;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  ${mobile({ marginTop: "15px", position: "relative" })}
`;
export const LeftButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 33%;
  color: #97a97c;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-radius: 10px;
  opacity: 0.7;
  z-index: 1;
  ${mobile({ top: "45%" })}
`;
export const RightButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 33%;
  color: #97a97c;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-radius: 10px;
  opacity: 0.7;
  z-index: 1;
  ${mobile({ top: "45%" })}
`;

export const MainTitle = styled.h3`
  padding: 20px;
  color: #606f49;
  text-align: center;
  font-size: 40px;
  margin-top: 3%;
  font-family: "Titillium Web", sans-serif;
  ${mobile({ marginTop: "10%" })}
`;
