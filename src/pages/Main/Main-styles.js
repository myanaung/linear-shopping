import { mobile } from "../../components/responsive";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
  ${mobile({ width: "100%" })}
`;
