import { useState } from "react";

import { useGetChildrenComment } from "@Query/comment/useGetCommentQuery";
import changeDateToDateFnsFormat from "@DateFns/changeDateToDateFnsFormat";

import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { CommentRefetch } from "@Organisms/comment/interface";
import ChildCommentOpenerButton from "@Organisms/comment/button/ChildCommentOpener";
import PermissionButton from "@Organisms/comment/button/Permission";
import CommentContent from "@Organisms/comment/Content";
import ChildrenComments from "@Organisms/comment/Children";

import CommentSubmit from "@Organisms/comment/input/Submit";

interface ParentCommentsProps {
  refetch: () => CommentRefetch;
  comment: GetCommentsItem;
  postId: string;
}
const ParentComments = ({ postId, refetch, comment }: ParentCommentsProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isChildrenOpen, setIsChildrenOpen] = useState(false);
  const commentList = useGetChildrenComment(
    "childComment" + comment.id,
    isChildrenOpen,
    postId,
    comment.id
  );

  const handleUpdateComment = () => {
    setIsUpdate(!isUpdate);
  };

  return (
    <div className="flex flex-col p-3 mx-20 mt-3">
      <>
        <div className="flex flex-row items-center">
          <div className="w-[50px] mr-3 rounded-full h-[50px] bg-neutral-800" />
          <div>{comment.user.username}</div>
          <p className="ml-3 text-sm">
            {changeDateToDateFnsFormat(comment.createdAt)}
          </p>

          <div className="ml-auto">
            <PermissionButton
              refetch={refetch}
              comment={comment}
              onUpdateComment={handleUpdateComment}
            />
          </div>
        </div>

        <CommentContent
          refetch={refetch}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          comment={comment}
        />
        <ChildCommentOpenerButton
          isChildrenOpen={isChildrenOpen}
          setIsChildrenOpen={setIsChildrenOpen}
        />

        {commentList.isLoading && <>댓글 스켈레톤...</>}
        {commentList.isError && <>댓글 에러...</>}
        {isChildrenOpen && commentList.isSuccess && (
          <>
            {commentList.data?.data.list.map((comment) => (
              <ChildrenComments
                key={comment.id}
                postId={postId}
                refetch={commentList.refetch}
                comment={comment}
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
