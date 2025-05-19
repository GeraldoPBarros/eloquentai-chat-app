import Logo from "../../assets/eloquentai-logo-square.png";

export function ChatBodyIntro() {
  return (
    <div className="flex flex-col items-center w-full h-[120px] justify-between mt-4">
        <img src={Logo.src} alt="eloquentai-logo" />
        <b>Eloquent AI responds instantly</b>
        <label>Ask me anything</label>
    </div>
  );
}
