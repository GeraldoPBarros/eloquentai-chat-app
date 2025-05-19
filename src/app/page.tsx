import { HistoryProvider } from "./hooks/useHistory";
import Chat from "./components/Chat/Chat";
import { AI } from "@/src/app/generate-text/action";

export default function Home() {
  return (
    <AI>
      <HistoryProvider>
        <Chat />
      </HistoryProvider>
    </AI>
  );
}
