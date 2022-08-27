import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentContentsProps {
  comment: GetCommentsItem;
}

const CommentContents = ({ comment }: CommentContentsProps) => {
  if (comment.content === null) return <p>삭제된 댓글입니다.</p>;
  return <span>{comment.content}</span>;
};

export default CommentContents;
