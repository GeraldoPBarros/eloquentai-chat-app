"use client";

import { ChatBodyIntro } from "./ChatBodyIntro";
import { ChatMessage } from "./ChatMessage";

import { useUIState } from "ai/rsc";
import { ClientMessage } from "../../generate-text/action";

export function ChatBody() {
  const [conversation, setConversation] = useUIState();

  return (
    <div className="w-full p-4 h-[350px] overflow-y-auto">
      <ChatBodyIntro />
      {conversation.map((message: ClientMessage) => (
        <div key={message.id}>
          <ChatMessage role={message.role} message={message.display} />
        </div>
      ))}
    </div>
  );
}
