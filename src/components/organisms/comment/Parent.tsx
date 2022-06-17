import { useState } from "react";

import { useGetChildrenComment } from "@Query/comment/useGetCommentQuery";

import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { CommentRefetch } from "@Organisms/comment/interface";
import ChildrenComments from "@Organisms/comment/Children";
import ChildCommentOpenerButton from "@Organisms/comment/button/ChildCommentOpener";

import CommentSubmit from "@Organisms/comment/input/Submit";
import CommentBody from "@Organisms/comment/Body";

interface ParentCommentsProps {
  refetch: () => CommentRefetch;
  comment: GetCommentsItem;
  postId: string;
}
const ParentComments = ({ postId, refetch, comment }: ParentCommentsProps) => {
  const [isChildrenOpen, setIsChildrenOpen] = useState(false);
  const commentList = useGetChildrenComment(
    "childComment" + comment.id,
    isChildrenOpen,
    postId,
    comment.id
  );

  return (
    <div className="flex flex-col p-3 mx-20 mt-3">
      <>
        <CommentBody comment={comment} refetch={refetch} />
        <ChildCommentOpenerButton
          isChildrenOpen={isChildrenOpen}
          setIsChildrenOpen={setIsChildrenOpen}
        />

        {commentList.isLoading && <>댓글 스켈레톤...</>}
        {commentList.isError && <>댓글 에러...</>}
        {isChildrenOpen && commentList.isSuccess && (
          <>
            {commentList.data?.data.list.map((childComment) => (
              <ChildrenComments
                key={childComment.id}
                postId={postId}
                refetch={commentList.refetch}
                comment={childComment}
              />
            ))}
            <CommentSubmit
              refetch={commentList.refetch}
              postId={postId}
              replyTo={comment.id}
            />
          </>
        )}
      </>
    </div>
  );
};
export default ParentComments;
