import { mobile } from "../../components/responsive";
import styled from "styled-components";
export const ShoppingCartItem = styled.div`
  height: 150px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "100vw" })}
`;

export const CartContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: #b5c99a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const CartImgContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: -2px 2px 2px 2px #264e70;
`;

export const CartDes = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  width: 150px;
  margin-right: 5px;
`;

export const ProductName = styled.div`
  text-overflow: ellipsis "[..]";
  width: 100%;
  font-size: 12px;
`;
export const Quantity = styled.span`
  font-size: 10px;
`;
export const Price = styled.span`
  font-size: 10px;
`;
export const DeleteContainer = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer;
  color: #718355;
`;
