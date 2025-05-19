"use client";

import { useHistory } from "@/src/app/hooks/useHistory";

export function ChatClosed() {
  const { handleChatStatus, isOffline } = useHistory();

  return (
    <>
      {!isOffline ? (
        <button
          className="flex w-[48px] h-[48px] bg-purple-800 rounded-[25px] items-center justify-center fixed bottom-[30px] right-[35px] cursor-pointer"
          onClick={() => handleChatStatus("open")}
        >
          <span className="material-symbols-rounded">mode_comment</span>
        </button>
      ) : (
        <div className="flex p-4 w-[160px] h-[48px] bg-purple-800 rounded-[25px] items-center justify-between fixed bottom-[30px] right-[35px] cursor-not-allowed">
          <button className="material-symbols-rounded text-white cursor-not-allowed">sensors_off</button>
          <label className="text-white cursor-not-allowed">Chat is offline</label>
        </div>
      )}
    </>
  );
}
