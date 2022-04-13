interface ButtonCancelProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const ButtonCancel = ({ styles, text, onClick }: ButtonCancelProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded border-neutral-500 transform border ${styles}`}
    >
      {text}
    </button>
  );
};
