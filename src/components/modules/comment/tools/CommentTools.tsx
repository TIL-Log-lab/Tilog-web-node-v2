import CommentDelete from "@Components/modules/comment/button/CommentDelete";
import CommentRestore from "@Components/modules/comment/button/CommentRestore";
import CommentUpdate from "@Components/modules/comment/button/CommentUpdate";
import useIsOwner from "@Hooks/useIsOwner";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentToolsProps {
  comment: GetCommentsItem;
  handleUpdate: () => void;
}

const CommentTools = ({ comment, handleUpdate }: CommentToolsProps) => {
  const isOwner = useIsOwner(comment.user.userId);
  if (!isOwner) return null;
  if (comment.content === null) return <CommentRestore />;
  return (
    <div className="space-x-2">
      <CommentDelete
        commentId={comment.id}
        postId={comment.postId}
        replyTo={comment.replyTo}
      />
      <CommentUpdate handleUpdate={handleUpdate} />
    </div>
  );
};

export default CommentTools;
