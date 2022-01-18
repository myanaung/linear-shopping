import { DeleteForeverOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeItem } from "../../reducers/cartSlice";
import {
  ShoppingCartItem,
  CartContainer,
  CartImgContainer,
  CartImg,
  CartDes,
  ProductName,
  Quantity,
  Price,
  DeleteContainer,
  DetailsButton,
} from "./CartProducts-styles";

const CartProducts = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <ShoppingCartItem>
      <CartContainer>
        <CartImgContainer>
          <CartImg src={cartItem.img} />
        </CartImgContainer>
        <CartDes>
          <ProductName>Name : {cartItem.title}</ProductName>
          <Quantity>Num: {cartItem.quantity}</Quantity>
          <Price>Price : {cartItem.totalPrice}</Price>
        </CartDes>
        <DeleteContainer
          onClick={() => {
            dispatch(removeItem({ cartItemId: cartItem.id }));
          }}
        >
          <DeleteForeverOutlined />
        </DeleteContainer>
      </CartContainer>
    </ShoppingCartItem>
  );
};

export default CartProducts;
