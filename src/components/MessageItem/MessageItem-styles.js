import styled from "styled-components";
import { mobile } from "./../responsive";

export const MessageItemContainer = styled.div`
  width: 340px;
  /* height: 208px; */
  background-color: #e5e5e5;
  border-radius: 10px;
  overflow: hidden;
  ${mobile({ marginBottom: "20px" })}
`;

export const Text = styled.div`
  font-family: "Titillium Web", sans-serif;
  padding: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Logo = styled.img`
  padding: 10px;
  transform: rotate(180deg);
`;

export const NameContainer = styled.div`
  background-color: #40916c;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;
export const Left = styled.div`
  color: whitesmoke;
`;
export const Right = styled.div`
  color: whitesmoke;
`;
