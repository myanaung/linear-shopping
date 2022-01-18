import {
  AccountBalance,
  CreditCard,
  FacebookOutlined,
  Instagram,
  Payments,
  Pinterest,
  YouTube,
} from "@mui/icons-material";
import {
  Container,
  Wrapper,
  Left,
  LeftTitle,
  ContactContainer,
  ContactName,
  ContactContext,
  FacebookContainer,
  PinterestContainer,
  InstagramContainer,
  YoutubeContainer,
  Center,
  CenterTitle,
  Link,
  LinkContainer,
  Right,
  RightTitle,
  PaymentContainer,
  PaymentName,
  PaymentIcon,
  PaymentImageContainer,
  PaymentImage,
  Copyright,
} from "./Footer-styles";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LeftTitle>Contact Us</LeftTitle>
          <ContactContainer>
            <ContactName>
              <b>Address : </b>
            </ContactName>
            <ContactContext>No.3 , Mahar Street , Myanaung.</ContactContext>
          </ContactContainer>
          <ContactContainer>
            <ContactName>
              <b>Phone : </b>
            </ContactName>
            <ContactContext>+959 756 356 990</ContactContext>
          </ContactContainer>
          <ContactContainer>
            <ContactName>
              <b>Email : </b>
            </ContactName>
            <ContactContext>nyanlintun225nlt@gmail.com</ContactContext>
          </ContactContainer>
          <ContactContainer>
            <FacebookContainer>
              <FacebookOutlined />
            </FacebookContainer>
            <PinterestContainer>
              <Pinterest />
            </PinterestContainer>
            <InstagramContainer>
              <Instagram />
            </InstagramContainer>
            <YoutubeContainer>
              <YouTube />
            </YoutubeContainer>
          </ContactContainer>
        </Left>
        <Center>
          <CenterTitle>Useful Links</CenterTitle>
          <LinkContainer>
            <Link>Home</Link>
            <Link>Contact</Link>
            <Link>Services</Link>
            <Link>About</Link>
            <Link>Get Points</Link>
            <Link>Setting</Link>
            <Link>Home</Link>
            <Link>Contact</Link>
            <Link>Service</Link>
          </LinkContainer>
        </Center>
        <Right>
          <RightTitle>Payment Methods</RightTitle>
          <PaymentContainer>
            <PaymentName>
              <b>Banking</b>
            </PaymentName>
            <PaymentIcon>
              <AccountBalance />
            </PaymentIcon>
          </PaymentContainer>
          <PaymentContainer>
            <PaymentName>
              <b>Credit Card</b>
            </PaymentName>
            <PaymentIcon>
              <CreditCard />
            </PaymentIcon>
          </PaymentContainer>
          <PaymentContainer>
            <PaymentName>
              <b>Visa Card</b>
            </PaymentName>
            <PaymentIcon>
              <Payments />
            </PaymentIcon>
          </PaymentContainer>
          <PaymentImageContainer>
            <PaymentImage src="https://i.ibb.co/QXqkRXB/payment.png" />
          </PaymentImageContainer>
        </Right>
      </Wrapper>
      <Copyright>&copy;2020-2022,linearshopping.com</Copyright>
    </Container>
  );
};

export default Footer;
