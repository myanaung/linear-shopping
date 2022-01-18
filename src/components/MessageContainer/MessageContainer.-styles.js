import styled from "styled-components";
import { mobile } from "./../responsive";

export const MessageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  ${mobile({ height: "100%" })}
`;

export const Text = styled.div`
  font-family: "Mochiy Pop P One", sans-serif;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 30px;
  margin: 20px auto;
  ${mobile({ fontSize: "24px", marginBottom: "20px" })}
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })}
`;
