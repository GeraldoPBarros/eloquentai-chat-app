"use client";

import ChatbotIcon from "../ChatbotIcon";
import { useHistory } from "@/src/app/hooks/useHistory";

export function ChatHeader() {
  const { handleChatStatus } = useHistory();

  return (
    <div className="flex items-center h-16 w-full justify-between border-b-[1px] border-gray-300 p-2">
      <div className="flex items-center">
        <ChatbotIcon />
        <b className="ml-2">Eloquent AI</b>
      </div>
      <button
        className="material-symbols-rounded cursor-pointer mr-2 hover:bg-gray-200"
        onClick={() => handleChatStatus("closed")}
      >
        keyboard_arrow_down
      </button>
    </div>
  );
}
