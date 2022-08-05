interface CommentSubmitProps {
  onCreateComment: () => void;
}

const CommentSubmit = ({ onCreateComment }: CommentSubmitProps) => {
  return (
    <button
      type="button"
      onClick={onCreateComment}
      className="w-1/4 p-5 bg-neutral-700 hover:bg-neutral-600"
    >
      <span className="text-neutral-50">확인</span>
    </button>
  );
};

export default CommentSubmit;
