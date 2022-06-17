import { Dispatch, SetStateAction } from "react";

import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { CommentRefetch } from "@Organisms/comment/interface";
import CommentUpdateInput from "@Organisms/comment/input/Update";

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
  if (comment.deletedAt) {
    return <p className="p-5 text-lg text-neutral-800">삭제된 댓글</p>;
  }
  if (!isUpdate) {
    return <p className="p-5 text-lg text-neutral-800">{comment.content}</p>;
  }
  return (
    <CommentUpdateInput
      prevContent={!comment.content ? "" : comment.content}
      setIsUpdate={setIsUpdate}
      commentId={comment.id}
      refetch={refetch}
    />
  );
};
export default CommentContent;
