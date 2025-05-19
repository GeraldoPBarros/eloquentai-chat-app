
import { ChatBody } from "../ChatBody/ChatBody";
import { ChatFooter } from "../ChatFooter/ChatFooter";
import { ChatHeader } from "../ChatHeader/ChatHeader";

const Chat: React.FC = () => {

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-gray-200">
      <div className="flex-col w-[400px] bg-white justify-center overflow-hidden rounded-[15px] shadow-2xl">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default Chat;
