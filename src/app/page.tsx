import { HistoryProvider } from "./hooks/useHistory";
import Chat from "./components/Chat/Chat";

export default function Home() {
  return (
    <HistoryProvider>
      <Chat />
    </HistoryProvider>
  );
}
