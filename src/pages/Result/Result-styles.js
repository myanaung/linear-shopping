import styled from "styled-components";
import { mobile } from "./../../components/responsive";

export const ResultContainer = styled.div`
  border: 1px solid #a6b98b;
  width: 300px;
  height: 300px;
  border-radius: 4px;
  ${mobile({ marginBottom: "20px" })}
`;

export const ResultTitle = styled.div`
  font-size: 22px;
  height: 40px;
  background-color: #a6b98b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const Thanks = styled.div`
  font-size: 18px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
