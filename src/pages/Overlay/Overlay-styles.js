import styled from "styled-components";

export const OverlayContainer = styled.div`
  width: 100vw;
  height: 90vh;
  z-index: 4;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: changedBackground 4s forwards;
  animation: showOpacity 1s ease-in forwards;
  @keyframes showOpacity {
    0% {
      opacity: 0;
    }
    100% {
      background-color: white;
      opacity: 1;
    }
  }
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  bottom: 40px;
  margin: 0 auto;
  cursor: pointer;
`;
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  animation: moveUp ease-in-out 0.5s forwards;
  @keyframes moveUp {
    100% {
      transform: translateY(-100px);
    }
  }
`;
export const HomeLink = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 22px;
  color: #728359;
`;
export const ProductsLink = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 22px;
  color: #728359;
`;
export const ShoppingCartLink = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 22px;
  color: #728359;
`;

export const Title = styled.span`
  font-family: "Mochiy Pop P One", sans-serif;
  font-size: 32px;
  position: absolute;
  top: 40px;
`;
