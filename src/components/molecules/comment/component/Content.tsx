import { Dispatch, SetStateAction } from "react";

import CommentUpdate from "@Molecules/comment/input/Update";

import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { CommentRefetch } from "@Molecules/comment/interface";

interface CommentContentProps {
  refetch: () => CommentRefetch;
  isUpdate: boolean;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  comment: GetCommentsItem;
}

const CommentContent = ({
  isUpdate,
  setIsUpdate,
  comment,
  refetch,
}: CommentContentProps) => {
  return (
    <>
      {comment.deletedAt ? (
        <p className="p-5 text-lg text-neutral-800">삭제된 댓글</p>
      ) : isUpdate ? (
        <CommentUpdate
          prevContent={!comment.content ? "" : comment.content}
          setIsUpdate={setIsUpdate}
          commentId={comment.id}
          refetch={refetch}
        />
      ) : (
        <p className="p-5 text-lg text-neutral-800">{comment.content}</p>
      )}
    </>
  );
};
export default CommentContent;
