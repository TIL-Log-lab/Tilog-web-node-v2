import CommentSubmit from "@Components/organisms/comment/button/CommentSubmit";
import useSubmitUpdateComment from "@Components/organisms/comment/input/hooks/useSubmitUpdateComment";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentInputProps {
  comment: GetCommentsItem;
  handleUpdate: () => void;
}
const CommentUpdateInput = ({ comment, handleUpdate }: CommentInputProps) => {
  const { handleSubmit, updateContent, handleComment } = useSubmitUpdateComment(
    comment,
    handleUpdate
  );
  return (
    <div>
      <input
        className="inline w-3/4 h-full p-5"
        type="text"
        value={updateContent}
        placeholder="코멘트 입력"
        onChange={handleComment}
      />
      <CommentSubmit onCreateComment={handleSubmit} />
    </div>
  );
};

export default CommentUpdateInput;
