import { mobile } from "../../components/responsive";
import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  background-color: transparent;
`;

export const Body = styled.div`
  display: flex;
  min-height: 50vh;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

//Left Container
export const ShoppingLists = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
//Right Container
export const TotalResult = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductItemContainer = styled.div`
  border: 1px solid #a6b98b;
  background-color: transparent;
  border-radius: 6px;
  width: 240px;
  height: 260px;
  margin: 5px;
  position: relative;
  overflow: hidden;
  ${mobile({ width: "97vw", margin: "5px auto" })}
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80px;
  border-radius: 14px;
`;

export const Title = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0px;
`;

export const Price = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  margin: 10px 0px;
`;

export const Quantity = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
`;

export const RemoveContainer = styled.div`
  width: 100%;
  height: 26px;
  position: absolute;
  bottom: 0;
  background-color: #a6b98b;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Details = styled.div`
  padding: 10px;
`;

export const MainTitle = styled.div`
  font-size: 24px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 3%;
`;

export const Nothing = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
