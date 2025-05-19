"use client";

import { createContext, useContext, useState } from "react";
import { useActions, useUIState } from "ai/rsc";

import { HistoryContextTypes, MessageType } from "../../types/history";
import { nanoid } from "nanoid";
import { ClientMessage } from "../generate-text/action";

const HistoryContext = createContext<HistoryContextTypes>({
  messageHistory: null,
  handleUserInputMessage: () => {},
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HistoryProvider = ({ children }: any) => {
  const [messageHistory, setMessageHistory] = useState<MessageType[]>([]);
  const [conversation, setConversation] = useUIState();
  const { continueConversation } = useActions();

  const handleUserInputMessage = async (message: MessageType) => {
    setMessageHistory([...messageHistory, message]);
    
    setConversation((currentConversation: ClientMessage[]) => [
      ...currentConversation,
      { id: nanoid(), role: "user", display: message.message },
    ]);

    const response = await continueConversation(message.message);

    setConversation((currentConversation: ClientMessage[]) => [
      ...currentConversation,
      response,
    ]);
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
