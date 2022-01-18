import styled from "styled-components";

export const CartContainer = styled.div`
  min-width: 300px;
  width: 300px;
  height: 400px;
  border: 1px solid #97a97c;
  border-radius: 3%;
  box-shadow: -2px 2px 4px 4px #bbd4ce;
  flex-grow: 2;
  transform: translateX(${(props) => props.index * -300}px);
  transition: transform 0.5s ease-in-out;
  margin-bottom: 26px;
  position: relative;
  @media only screen and (max-width: 380px) {
    min-width: 100vw;
    height: 450px;
    transform: translateX(${(props) => props.index * -100}vw);
  }
`;
export const CartTitle = styled.h5`
  font-family: "Mochiy Pop P One", sans-serif;
`;
export const CartDesContainer = styled.div`
  padding: 10px;
`;

export const CartImg = styled.img`
  padding: 5px;
  width: 50%;
  border-radius: 30%;
  box-shadow: -3px 2px 3px 3px #fdebd3;
  margin: 3%;
`;

export const CartImgContainer = styled.div`
  object-position: center;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const CartPrice = styled.div`
  position: absolute;
  top: 5px;
  right: 20%;
  background-color: #97a97c;
  color: white;
  font-size: 14px;
  padding: 5px;
  border-top-left-radius: 20%;
  border-bottom-right-radius: 20%;
`;

export const DetailsButton = styled.button`
  position: absolute;
  bottom: 0;
  cursor: pointer;
  width: 100%;
  height: 34px;
  background-color: #a6b98b;
  border: none;
  color: #dcebca;
`;

export const DetailsContainer = styled.div``;

export const Added = styled.div`
  position: absolute;
  background-color: #333d29;
  color: whitesmoke;
  left: 0;
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 4px 14px 4px;
`;
