export function MaintananceBanner() {
  return (
    <div className="flex items-center p-2 bg-yellow-300 absolute bottom-2 w-[90%] rounded-[5px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 2 L2 22 H22 L12 2 Z" />
        <line x1="12" y1="11" x2="12" y2="15" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>

      <div className="flex flex-col justify-between h-full ml-4">
        <label className="text-[20px] font-bold">Under Maintanance -</label>
        <label className="text-[16px]">Please try again later</label>
      </div>
    </div>
  );
}
