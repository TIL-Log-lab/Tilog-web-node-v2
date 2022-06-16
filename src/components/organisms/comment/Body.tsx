import changeDateToDateFnsFormat from "@DateFns/changeDateToDateFnsFormat";
import PermissionButton from "@Organisms/comment/button/Permission";
import CommentContent from "@Organisms/comment/Content";
import { CommentRefetch } from "@Organisms/comment/interface";
import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { useState } from "react";

interface CommentBodyProps {
  refetch: () => CommentRefetch;
  comment: GetCommentsItem;
}

const CommentBody = ({ comment, refetch }: CommentBodyProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const handleUpdateComment = () => {
    setIsUpdate(!isUpdate);
  };
  return (
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
    </>
  );
};

export default CommentBody;
