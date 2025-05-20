export interface MessageType {
  role: "user" | "assistant";
  message: string;
}

export type ChatStatusType = "open" | "closed";

export interface HistoryContextTypes {
  chatStatus: "open" | "closed";
  isOffline: boolean;
  isMaintananceMode: boolean;
  handleMaintananceMode: (status: boolean) => void;
  handleChatStatus: (status: ChatStatusType) => void;
  messageHistory: MessageType[] | null;
  handleUserInputMessage: (message: MessageType) => void;
}
