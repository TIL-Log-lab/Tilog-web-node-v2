interface ButtonConfirmProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const ButtonConfirm = ({
  styles,
  text,
  onClick,
}: ButtonConfirmProps) => {
  return (
    <button onClick={onClick} className={`${styles}`}>
      {text}
    </button>
  );
};
