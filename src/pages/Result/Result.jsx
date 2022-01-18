import { ResultTitle, ResultContainer, Price, Thanks } from "./Result-styles";
import { useSelector } from "react-redux";
import { getTotalPrice } from "./../../reducers/cartSlice";

const Result = () => {
  const totalPrice = useSelector(getTotalPrice);
  return (
    <ResultContainer>
      <ResultTitle>Result</ResultTitle>
      <Price>Price : ${totalPrice.toFixed(2)}</Price>
      <hr />
      <Thanks>Special Thanks for buying!</Thanks>
    </ResultContainer>
  );
};

export default Result;
