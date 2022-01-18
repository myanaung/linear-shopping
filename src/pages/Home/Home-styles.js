import styled from "styled-components";
import { mobile } from "./../../components/responsive";

export const HomeContainer = styled.div`
  ${mobile({ marginTop: "55px" })}
`;
export const ImageContainer = styled.div`
  flex: 1;
  width: 50vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "100vw", marginBottom: "60px" })}
`;
export const Image = styled.img`
  width: 70%;
`;
export const FirstContainer = styled.div`
  display: flex;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  })}
`;

export const RightTextContainer = styled.div`
  flex: 1;
  ${mobile({ marginBottom: "60px" })}
`;

export const LineBreak = styled.hr``;
