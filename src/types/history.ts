export interface MessageType {
  role: "user" | "assistant";
  message: string;
}

export interface HistoryContextTypes {
  messageHistory: MessageType[] | null;
  handleUserInputMessage: (message: MessageType) => void;
}
