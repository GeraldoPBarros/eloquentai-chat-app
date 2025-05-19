"use client";

import { createContext, useContext, useState } from "react";
import { HistoryContextTypes, MessageType } from "../../types/history";

const HistoryContext = createContext<HistoryContextTypes>({
  messageHistory: null,
  handleUserInputMessage: () => {},
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HistoryProvider = ({ children }: any) => {
  const [messageHistory, setMessageHistory] = useState<MessageType[]>([]);

  const handleUserInputMessage = (message: MessageType) => {
    setMessageHistory([...messageHistory, message]);
  };

  return (
    <HistoryContext.Provider
      value={{
        messageHistory,
        handleUserInputMessage,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("usePortfolio should be used inside of an AuthProvider");
  }
  return context;
};
