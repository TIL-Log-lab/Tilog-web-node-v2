interface SubmitButtonProps {
  content: string;
  onClick: () => void;
}

const SubmitButton = ({ content, onClick }: SubmitButtonProps) => {
  return (
    <button
      disabled={!content}
      className={`w-20 p-3 text-sm text-gray-600 transition border-t border-b border-r border-gray-300 rounded-r-lg dark:text-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
        !content ? "" : " dark:hover:bg-gray-600 hover:bg-gray-50"
      }`}
      type="submit"
      onClick={onClick}
    >
      남기기
    </button>
  );
};
export default SubmitButton;
