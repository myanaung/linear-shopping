import {
  MessageMainContainer,
  Text,
  ItemsContainer,
} from "./MessageContainer.-styles";
import MessageItem from "./../MessageItem/MessageItem";
import { messages } from "../../Data/data";

const MessageContainer = () => {
  return (
    <MessageMainContainer>
      <Text>Voice Of Customers</Text>
      <ItemsContainer>
        {messages.map((message) => (
          <MessageItem message={message} key={message.id} />
        ))}
      </ItemsContainer>
    </MessageMainContainer>
  );
};

export default MessageContainer;
