import { GetCommentsItem } from "@til-log.lab/tilog-api";
import CommentBody from "@Organisms/comment/Body";

import { CommentRefetch } from "@Organisms/comment/interface";
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
