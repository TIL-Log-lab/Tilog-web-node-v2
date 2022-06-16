import { useState } from "react";

import changeDateToDateFnsFormat from "@DateFns/changeDateToDateFnsFormat";

import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { CommentRefetch } from "@Organisms/comment/interface";
import CommentContent from "@Organisms/comment/Content";
import PermissionButton from "@Organisms/comment/button/Permission";

interface ChildrenCommentsProps {
  refetch: () => CommentRefetch;
  postId: string;
  comment: GetCommentsItem;
}
const ChildrenComments = ({ refetch, comment }: ChildrenCommentsProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
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
      </>
    </div>
  );
};
export default ChildrenComments;
