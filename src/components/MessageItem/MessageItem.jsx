import {
  MessageItemContainer,
  Text,
  LogoContainer,
  Logo,
  NameContainer,
  Left,
  Right,
} from "./MessageItem-styles";

const MessageItem = ({ message }) => {
  return (
    <>
      <MessageItemContainer>
        <LogoContainer>
          <Logo
            src={`https://kyawsanhtoo-pharmacy.vercel.app/icons/quote.svg`}
          />
        </LogoContainer>
        <Text>{message.message}</Text>
        <NameContainer>
          <Left>{message.name}</Left>
          <Right>{message.job}</Right>
        </NameContainer>
      </MessageItemContainer>
    </>
  );
};

export default MessageItem;
