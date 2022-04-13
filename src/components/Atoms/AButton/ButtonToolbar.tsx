interface ButtonToolbarProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const ButtonToolbar = ({
  styles,
  text,
  onClick,
}: ButtonToolbarProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded bg-neutral-300 text-white hover:bg-neutral-400 duration-100 ${styles}`}
    >
      {text}
    </button>
  );
};
