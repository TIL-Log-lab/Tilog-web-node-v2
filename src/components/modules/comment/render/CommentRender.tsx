import { useState } from "react";

import CommentUserProfile from "@Components/modules/comment/CommentUserProfile";
import CommentContents from "@Components/modules/comment/content/CommentContents";
import CommentUpdateInput from "@Components/modules/comment/input/CommentUpdateInput";
import CommentTools from "@Components/modules/comment/tools/CommentTools";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentRenderProps {
  comment: GetCommentsItem;
}
const CommentRender = ({ comment }: CommentRenderProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const handleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  return (
    <div key={comment.id}>
      <div className="flex items-center gap-x-2 shrink-0">
        <CommentUserProfile
          createdAt={comment.createdAt}
          userId={comment.user.userId}
        />
        <div className="ml-auto">
          {isUpdate || (
            <CommentTools handleUpdate={handleUpdate} comment={comment} />
          )}
        </div>
      </div>
      <div className="p-5">
        {isUpdate ? (
          <CommentUpdateInput handleUpdate={handleUpdate} comment={comment} />
        ) : (
          <CommentContents comment={comment} />
        )}
      </div>
    </div>
  );
};
export default CommentRender;
