export interface MessageType {
  isUserMessage: boolean;
  message: string;
}

export interface HistoryContextTypes {
  messageHistory: MessageType[] | null;
  handleUserInputMessage: (message: MessageType) => void;
}
