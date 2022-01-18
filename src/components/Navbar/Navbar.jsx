import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartItems } from "../../reducers/cartSlice";
import { Menu } from "@mui/icons-material";
import {
  Container,
  Left,
  LeftText,
  LeftImgContainer,
  LeftImg,
  Right,
  Icon,
  Badge,
  Products,
  MenuContainer,
  MenuIcon,
  MenuBadge,
  MenuIconContainer,
} from "./Navbar-styles.js";

const Navbar = ({ handleMenuClicked }) => {
  const cartItems = useSelector(getCartItems);
  return (
    <>
      <Container>
        <Left>
          <LeftImgContainer>
            <LeftImg src="https://i.ibb.co/37HPq7n/New-Project-1.png" />
          </LeftImgContainer>
          <LeftText>Spend less , smile more.</LeftText>
        </Left>
        <Right>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Products>Home</Products>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <Products>Products</Products>
          </Link>
          <Link to="/shopping-cart">
            <Icon>
              <ShoppingCartOutlined fontSize="large" />
              <Badge length={cartItems.length}>{cartItems.length}</Badge>
            </Icon>
          </Link>
        </Right>

        {/* Mobile Responsive */}
        <MenuContainer>
          <Link to="/shopping-cart">
            <MenuIcon>
              <ShoppingCartOutlined fontSize="medium" />
              <MenuBadge length={cartItems.length}>
                {cartItems.length}
              </MenuBadge>
            </MenuIcon>
          </Link>
          <MenuIconContainer onClick={handleMenuClicked}>
            <Menu />
          </MenuIconContainer>
        </MenuContainer>
      </Container>
    </>
  );
};

export default Navbar;
