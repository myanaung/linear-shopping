import {
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://i.ibb.co/YNzL6qh/Photo-Image.png") rgba(0, 0, 0, 0.5);
  opacity: 0.6;
`;

const Img = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  transform: translateX(${(props) => props.index * -100}vw);
  position: relative;
`;

const LeftButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  background-color: #f7d6d0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-radius: 10px;
  opacity: 0.7;
  z-index: 2;
`;
const RightButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  background-color: #f7d6d0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-radius: 10px;
  opacity: 0.7;
  z-index: 2;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClickedButton = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <LeftButton onClick={() => handleClickedButton("left")}>
        <ArrowCircleLeftOutlined fontSize="large" />
      </LeftButton>
      <Wrapper index={slideIndex}>
        <Left></Left>
        <Right>
          <Img />
        </Right>
      </Wrapper>
      <RightButton onClick={() => handleClickedButton("right")}>
        <ArrowCircleRightOutlined fontSize="large" />
      </RightButton>
    </Container>
  );
};

export default Slider;
