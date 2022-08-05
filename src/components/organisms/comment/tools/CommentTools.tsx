import CommentDelete from "@Components/organisms/comment/button/CommentDelete";
import CommentRestore from "@Components/organisms/comment/button/CommentRestore";
import CommentUpdate from "@Components/organisms/comment/button/CommentUpdate";
import useIsOwner from "@Hooks/react-query/validate/useIsOwner";

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
        replyTo={null}
      />
      <CommentUpdate handleUpdate={handleUpdate} />
    </div>
  );
};

export default CommentTools;
