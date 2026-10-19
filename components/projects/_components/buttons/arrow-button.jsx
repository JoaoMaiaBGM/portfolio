const ARROW_POSITION = { left: 'left-2', right: 'right-2' };

export function ArrowButton({ side, label, symbol, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`absolute ${ARROW_POSITION[side]} bg-port-black/60 p-large text-port-white hover:bg-port-black/80 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full`}
    >
      {symbol}
    </button>
  );
}
