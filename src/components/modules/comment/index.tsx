import CommentInput from "@Components/modules/comment/input/CommentInput";
import RootComment from "@Components/modules/comment/render/RootComment";
import { COMMENT_INPUT, COMMENT_PLACEHOLDER } from "@Library/constants/comment";
import useGetParentCommentQuery from "@Hooks/react-query/comment/parent/useGetParentCommentQuery";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface CommentProps {
  postId: GetPostDetailResponseDto["id"];
}

const Comment = ({ postId }: CommentProps) => {
  const commentList = useGetParentCommentQuery(postId);
  if (commentList.isError) return <span>{commentList.error.message.ko}</span>;
  if (commentList.isLoading) return null;
  if (!commentList.data) return null;

  return (
    <div>
      <hr />
      {commentList.data.data.list.map((comment) => (
        <RootComment key={comment.id} comment={comment} />
      ))}
      <CommentInput
        postId={postId}
        replyTo={null}
        placeholder={COMMENT_PLACEHOLDER.ko}
        buttonText={COMMENT_INPUT.ko}
      />
    </div>
  );
};
export default Comment;
