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
    <button
      onClick={onClick}
      className={`rounded duration-100 bg-signature-color text-white ${styles}`}
    >
      {text}
    </button>
  );
};
