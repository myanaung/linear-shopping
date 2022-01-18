import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
  background-color: #dcebca;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  })}
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 40vh;
  ${mobile({ display: "flex", height: "40%" })}
`;
export const Left = styled.div`
  flex: 1;
  ${mobile({ width: "50%" })}
`;
export const Center = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
`;
export const Right = styled.div`
  flex: 1;
  ${mobile({ width: "50%" })}
`;

export const Link = styled.div`
  width: 30%;
  margin: 2% 1%;
  text-align: center;
  color: black;
  padding: 2px;
  border-radius: 3px;
  &:hover {
    text-decoration: underline;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CenterTitle = styled.h3`
  margin-top: 20px;
  font-size: 20px;
  color: black;
  text-align: center;
`;

export const LeftTitle = styled.h3`
  margin-top: 20px;
  font-size: 20px;
  color: black;
  text-align: center;
  ${mobile({ fontSize: "10px" })}
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: black;
  padding: 10px;
`;

export const ContactContext = styled.div`
  /* background-color: green; */
  flex: 1;
  ${mobile({ fontSize: "8px" })}
`;
export const ContactName = styled.div`
  text-align: center;
  /* background-color: blue; */
  flex: 1;
  ${mobile({ fontSize: "8px" })}
`;

export const RightTitle = styled.h3`
  text-align: center;
  margin-top: 20px;
  color: black;
  ${mobile({ fontSize: "10px" })}
`;
export const PaymentContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const PaymentName = styled.div`
  flex: 1;
  text-align: center;
  color: black;
  ${mobile({ fontSize: "8px" })}
`;
export const PaymentIcon = styled.div`
  flex: 1;
  text-align: center;
  color: black;
  cursor: pointer;
`;

export const PaymentImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaymentImage = styled.img`
  ${mobile({ width: "60%" })}
`;

export const FacebookContainer = styled.div`
  cursor: pointer;
  color: #395693;
`;

export const PinterestContainer = styled.div`
  cursor: pointer;
  color: #c3333b;
`;

export const InstagramContainer = styled.div`
  cursor: pointer;
  color: #b72797;
`;

export const YoutubeContainer = styled.div`
  cursor: pointer;
  color: #f70000;
`;

export const Copyright = styled.div`
  width: 100%;
  text-align: center;
  color: black;
  padding-bottom: 10px;
`;
