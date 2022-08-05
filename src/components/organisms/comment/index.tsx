import CommentInput from "@Components/organisms/comment/input/CommentInput";
import CommentParent from "@Components/organisms/comment/render/CommentParent";
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
    <>
      {commentList.data.data.list.map((comment) => (
        <CommentParent comment={comment} />
      ))}
      <CommentInput postId={postId} replyTo={null} />
    </>
  );
};
export default Comment;
