interface AButtonConfirmProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const AButtonConfirm = ({
  styles,
  text,
  onClick,
}: AButtonConfirmProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded duration-100 bg-signature-color text-white ${styles}`}
    >
      {text}
    </button>
  );
};
