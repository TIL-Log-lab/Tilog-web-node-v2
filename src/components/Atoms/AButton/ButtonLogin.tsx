interface ButtonLoginProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const ButtonLogin = ({ styles, text, onClick }: ButtonLoginProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded bg-black text-white ${styles}`}
    >
      {text}
    </button>
  );
};
