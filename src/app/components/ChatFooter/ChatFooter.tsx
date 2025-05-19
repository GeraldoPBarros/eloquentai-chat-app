"use client"

import { useRef, FormEvent } from "react";
import { useHistory } from "../../hooks/useHistory";

export function ChatFooter() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { handleUserInputMessage } = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputRef.current) {
      const userMessage = inputRef.current.value.trim();

      if (!userMessage) {
        return;
      }

      handleUserInputMessage({
        role: "user",
        message: userMessage,
      });
      
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex h-22 relative">
      <form
        action="#"
        className="flex m-4 p-4 w-full border-[1px] h-[56px] rounded-[50px] border-gray-300 break-words"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          ref={inputRef}
          className="w-4/5 outline-none"
          placeholder="Type a messsage..."
          required
        />
        <button className="material-symbols-rounded border-white h-[40px] w-[40px] absolute right-6 top-6 rounded-[25px] bg-purple-800 hover:bg-purple-900 text-white cursor-pointer ">
          arrow_upward
        </button>
      </form>
    </div>
  );
}
