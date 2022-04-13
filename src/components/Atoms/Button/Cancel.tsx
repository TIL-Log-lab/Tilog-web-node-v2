interface AButtonCancelProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const AButtonCancel = ({
  styles,
  text,
  onClick,
}: AButtonCancelProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded border-neutral-500 transform border ${styles}`}
    >
      {text}
    </button>
  );
};
