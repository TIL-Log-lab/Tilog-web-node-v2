interface ButtonTagProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const ButtonTag = ({ styles, text, onClick }: ButtonTagProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded border border-neutral-400 font-semibold text-xl font-eng-sub-font-2 ${styles}`}
    >
      {text}
    </button>
  );
};
