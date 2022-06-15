import { useState } from "react";

import CommentTools from "@Molecules/comment/component/Tools";
import CommentContent from "@Molecules/comment/component/Content";
import ChildrenComment from "@Molecules/comment/component/Children";
import ChildrenCommentInput from "@Molecules/comment/input/Children";
import { useGetChildrenComment } from "@Query/comment/useGetCommentQuery";
import changeDateToDateFnsFormat from "@DateFns/changeDateToDateFnsFormat";

import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { CommentRefetch } from "@Molecules/comment/interface";

interface ParentCommentProps {
  refetch: () => CommentRefetch;
  comment: GetCommentsItem;
  postId: string;
}
const ParentComment = ({ postId, refetch, comment }: ParentCommentProps) => {
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
  const ChildCommentView = () => {
    return (
      <>
        {isChildrenOpen || (
          <button
            onClick={() => setIsChildrenOpen(true)}
            className="relative right-0 text-sm"
          >
            답글 보기
          </button>
        )}
        {isChildrenOpen && (
          <button
            onClick={() => setIsChildrenOpen(false)}
            className="relative right-0 text-sm"
          >
            {commentList.isSuccess && <>답글 닫기</>}
          </button>
        )}
      </>
    );
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
            <CommentTools
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
        <ChildCommentView />
        {commentList.isLoading && <>댓글 스켈레톤...</>}
        {commentList.isError && <>댓글 에러...</>}
        {isChildrenOpen && commentList.isSuccess && (
          <>
            {commentList.data?.data.list.map((comment) => (
              <ChildrenComment
                key={comment.id}
                postId={postId}
                refetch={commentList.refetch}
                comment={comment}
              />
            ))}
            <ChildrenCommentInput
              refetch={commentList.refetch}
              postId={postId}
              commentId={comment.id}
            />
          </>
        )}
      </>
    </div>
  );
};
export default ParentComment;
