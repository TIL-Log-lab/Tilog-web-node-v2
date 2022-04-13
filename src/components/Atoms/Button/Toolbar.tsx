interface AButtonToolbarProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const AButtonToolbar = ({
  styles,
  text,
  onClick,
}: AButtonToolbarProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded bg-neutral-300 text-white hover:bg-neutral-400 duration-100 ${styles}`}
    >
      {text}
    </button>
  );
};
