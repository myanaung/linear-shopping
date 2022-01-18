import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #97a97c;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 3;
`;

export const Left = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  ${mobile({ flex: 1 })}
`;

export const LeftText = styled.p`
  font-family: "Shizuru", cursive;
  font-size: 26px;
  font-weight: bold;
  color: black;
  user-select: none;
  padding-bottom: 10px;
  ${mobile({ fontSize: "12px" })}
`;

export const LeftImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const LeftImg = styled.img`
  border-radius: 4px;
  width: 80px;
  height: 100%;
  ${mobile({ width: "60px", height: "100%", marginRight: "12px" })}
`;

export const Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  ${mobile({ display: "none" })}
`;

export const Icon = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: black;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
  position: relative;
`;

export const Badge = styled.div`
  position: absolute;
  color: white;
  top: 3px;
  right: 2px;
  font-size: 12px;
  font-weight: bold;
  background-color: #728359;
  width: 15px;
  height: 15px;
  display: ${({ length }) => (length === 0 ? "none" : "block")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Products = styled.p`
  padding: 4px;
  color: black;
`;

export const MenuContainer = styled.div`
  display: none;
  position: relative;
  ${mobile({
    flex: "0.5",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  })}
`;

export const MenuIcon = styled.div`
  position: relative;
  color: white;
`;
export const MenuBadge = styled.div`
  position: absolute;
  top: -6px;
  right: -2px;
  width: 10px;
  height: 10px;
  display: ${({ length }) => (length === 0 ? "none" : "block")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #606f49;
  font-size: 9px;
  border-radius: 50%;
`;

export const MenuIconContainer = styled.div`
  cursor: pointer;
  color: white;
`;
