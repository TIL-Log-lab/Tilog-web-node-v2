interface ButtonLoginProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const AButtonLogin = ({ styles, text, onClick }: ButtonLoginProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded bg-black text-white ${styles}`}
    >
      {text}
    </button>
  );
};
