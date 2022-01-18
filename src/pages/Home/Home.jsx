import {
  HomeContainer,
  ImageContainer,
  Image,
  RightTextContainer,
  FirstContainer,
  LineBreak,
} from "./Home-styles";
import GirlImg from "../../usefulIcons/3.png";
import RightHomeContainer from "../../components/RightHomeContainer/RightHomeContainer";
import MessageContainer from "../../components/MessageContainer/MessageContainer.jsx";
import Footer from "./../../components/Footer/Footer";

const Home = () => {
  return (
    <HomeContainer>
      <FirstContainer>
        <ImageContainer>
          <Image src={GirlImg} />
        </ImageContainer>
        <RightTextContainer>
          <RightHomeContainer />
        </RightTextContainer>
      </FirstContainer>
      <LineBreak />
      <MessageContainer />
      <LineBreak />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
