import { useState } from "react";

import changeDateToDateFnsFormat from "@DateFns/changeDateToDateFnsFormat";

import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { CommentRefetch } from "@Organisms/comment/interface";
import CommentContent from "@Organisms/comment/Content";
import PermissionButton from "@Organisms/comment/button/Permission";
import CommentBody from "@Organisms/comment/Body";

interface ChildrenCommentsProps {
  refetch: () => CommentRefetch;
  postId: string;
  comment: GetCommentsItem;
}
const ChildrenComments = ({ refetch, comment }: ChildrenCommentsProps) => {
  return (
    <div className="flex flex-col p-3 mx-20 mt-3">
      <CommentBody comment={comment} refetch={refetch} />
    </div>
  );
};
export default ChildrenComments;
