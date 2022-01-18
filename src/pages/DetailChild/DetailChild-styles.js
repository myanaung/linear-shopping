import styled from "styled-components";
import { mobile } from "./../../components/responsive";

export const DetailsContainer = styled.div`
  height: 100vh;
  display: flex;
  ${mobile({ flexDirection: "column", justifyContent: "center" })}
`;

export const Right = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  ${mobile({
    width: "100%",
    height: "50%",
    display: "block",
  })}
`;
export const Left = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "100%", height: "200px", marginTop: "44px" })}
`;

export const ProductImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  ${mobile({ width: "50%" })}
`;

export const Img = styled.img`
  width: 350px;
  ${mobile({ width: "200px" })}
`;

export const ProductName = styled.div`
  font-family: "Mochiy Pop P One", sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextDesc = styled.div`
  font-size: 20px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: #cfe1b9;
  border-radius: 6px;
`;
export const ContainerDesc = styled.div`
  display: ${({ open }) => (open ? "none" : "block")};
  margin-bottom: 25px;
`;

export const DescriptionContainer = styled.div``;

export const DetailsInfo = styled.div`
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  text-align: center;
  position: relative;
`;

export const TextContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 7% auto;
  border-radius: 20px;
`;

export const AddIcon = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  /* position: fixed;
  bottom: 0; */
`;

export const QuantityButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Increase = styled.button`
  cursor: pointer;
  color: #c2d5aa;
  background-color: transparent;
  outline: none;
  border: none;
`;
export const Decrease = styled.button`
  cursor: pointer;
  color: #c2d5aa;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const AddToCartContainer = styled.button`
  border: 1px solid #c2d5aa;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) => (props.disabled ? "transparent" : "#c2d5aa")};
  outline: none;
  color: black;
`;

export const AddToCartText = styled.span``;

export const Quantity = styled.span`
  margin: 10px;
  color: #c2d5aa;
`;
