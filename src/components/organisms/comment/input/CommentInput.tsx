import CommentSubmit from "@Components/organisms/comment/button/CommentSubmit";
import useSubmitComment from "@Components/organisms/comment/input/hooks/useSubmitComment";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentInputProps {
  postId: GetCommentsItem["postId"];
  replyTo: GetCommentsItem["replyTo"] | null;
}
const CommentInput = ({ postId, replyTo }: CommentInputProps) => {
  const { handleSubmit, content, handleComment } = useSubmitComment(
    postId,
    replyTo
  );
  return (
    <div>
      <input
        className="inline w-3/4 h-full p-5"
        type="text"
        value={content}
        placeholder="코멘트 입력."
        onChange={handleComment}
      />
      <CommentSubmit onCreateComment={handleSubmit} />
    </div>
  );
};

export default CommentInput;
