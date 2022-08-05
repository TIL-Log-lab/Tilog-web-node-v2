import { BsPencilSquare } from "react-icons/bs";

interface CommentUpdateProps {
  handleUpdate: () => void;
}
const CommentUpdate = ({ handleUpdate }: CommentUpdateProps) => {
  return (
    <button
      className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100"
      type="button"
      onClick={handleUpdate}
    >
      <BsPencilSquare />
    </button>
  );
};
export default CommentUpdate;
