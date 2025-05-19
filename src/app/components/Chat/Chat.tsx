"use client";

import { ChatBody } from "../ChatBody/ChatBody";
import { ChatClosed } from "../ChatClosed/ChatClosed";
import { ChatFooter } from "../ChatFooter/ChatFooter";
import { ChatHeader } from "../ChatHeader/ChatHeader";

import { useHistory } from "@/src/app/hooks/useHistory";

interface ChatProps {
  primaryColor?: "string";
  headerLogo?: string;
  bodyLogo?: string;
  companyName?: string;
  firstTitle?: string;
  secondTitle?: string;
}

const Chat: React.FC = ({
  primaryColor,
  headerLogo,
  bodyLogo,
  companyName,
  firstTitle,
  secondTitle,
}: ChatProps) => {
  const { chatStatus } = useHistory();

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-gray-200">
      {chatStatus === "open" ? (
        <div
          className={`flex-col w-[400px] bg-white justify-center overflow-hidden rounded-[15px] shadow-2xl fixed right-[35px] bottom-[30px] transition-all duration-500 ${
            chatStatus === "open"
              ? "translate-y-0"
              : "translate-y-full pointer-events-none"
          }`}
        >
          <ChatHeader />
          <ChatBody />
          <ChatFooter />
        </div>
      ) : (
        <ChatClosed />
      )}
    </div>
  );
};

export default Chat;
