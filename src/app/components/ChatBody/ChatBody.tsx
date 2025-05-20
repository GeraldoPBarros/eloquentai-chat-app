"use client";

import { ChatBodyIntro } from "./ChatBodyIntro";
import { ChatMessage } from "./ChatMessage";

import { useUIState } from "ai/rsc";
import { useHistory } from "@/src/app/hooks/useHistory";

import { ClientMessage } from "../../generate-text/action";
import { MaintananceBanner } from "../MaintananceBanner/MaintananceBanner";

export function ChatBody() {
  const [conversation, setConversation] = useUIState();
  const { isMaintananceMode } = useHistory();

  return (
    <div className="w-full p-4 h-[350px] overflow-y-auto relative">
      <ChatBodyIntro />
      {conversation.map((message: ClientMessage) => (
        <div key={message.id}>
          <ChatMessage role={message.role} message={message.display} />
        </div>
      ))}
      {isMaintananceMode && <MaintananceBanner />}
    </div>
  );
}
