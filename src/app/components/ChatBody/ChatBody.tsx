"use client"

import { ChatBodyIntro } from "./ChatBodyIntro";
import { ChatMessage } from "./ChatMessage";

import { useHistory } from "../../hooks/useHistory";

export function ChatBody() {
  const { messageHistory } = useHistory();

  return (
    <div className="w-full p-4 h-[350px] overflow-y-auto">
      <ChatBodyIntro />
      {messageHistory?.map((history, index) => (
        <ChatMessage
          key={index}
          isMessageFromUser={history.isUserMessage}
          message={history.message}
        />
      ))}
    </div>
  );
}
