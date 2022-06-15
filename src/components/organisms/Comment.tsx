import CommentInput from "@Molecules/comment/input/Parent";
import ParentComment from "@Molecules/comment/component/Parent";
import { useGetParentCommentQuery } from "@Query/comment/useGetCommentQuery";

const Comment = ({ postId }: { postId: string }) => {
  const comments = useGetParentCommentQuery(postId);
  return (
    <div className="mt-10">
      <hr className="w-full border-neutral-700 dark:border-neutral-300" />
      {comments.isError && <>댓글을 가져올 수 없어요!</>}
      {comments.isLoading && <>댓글을 가져오는 중이에요!</>}
      {comments.isSuccess &&
        comments.data.data.list.map((comment) => (
          <ParentComment
            postId={postId}
            refetch={comments.refetch}
            key={comment.id}
            comment={comment}
          />
        ))}
      <CommentInput postId={postId} refetch={comments.refetch} />
    </div>
  );
};
export default Comment;
