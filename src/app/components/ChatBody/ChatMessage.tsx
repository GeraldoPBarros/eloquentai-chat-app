import { ReactNode } from "react";
import Logo from "../../assets/eloquentai-logo.png";

interface ChatMessageProps {
  role: "user" | "assistant";
  message: ReactNode;
}

export function ChatMessage({ role, message }: ChatMessageProps) {
  return (
    <div className="flex w-full h-auto">
      {role === "user" ? (
        <div className="flex w-full justify-end">
          <div className="flex bg-purple-900 text-white w-3/4 p-2 rounded-[5px] mt-4">{message}</div>
        </div>
      ) : (
        <div className="flex w-full justify-start mt-4">
          <img src={Logo.src} className="w-[32px] h-[32px]" alt="eloquentai-logo" />
          <div className="flex bg-gray-200 w-3/4 p-2 rounded-[5px] ml-4 ">{message}</div>
        </div>
      )}
    </div>
  );
}
