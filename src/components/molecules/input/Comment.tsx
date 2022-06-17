import { ChangeEvent } from "react";

interface CommentInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  content?: string;
}
const CommentInput = ({
  onChange,
  placeholder,
  content,
}: CommentInputProps) => {
  return (
    <input
      className="w-full h-full px-4 text-sm text-gray-600 transition border border-gray-300 rounded-l-lg hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
      type="text"
      value={content}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default CommentInput;
