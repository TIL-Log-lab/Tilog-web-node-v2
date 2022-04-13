interface AButtonTagProps {
  text: string;
  styles: string;
  onClick: () => void;
}

export const AButtonTag = ({ styles, text, onClick }: AButtonTagProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded border border-neutral-400 font-semibold text-xl font-eng-sub-font-2 ${styles}`}
    >
      {text}
    </button>
  );
};
