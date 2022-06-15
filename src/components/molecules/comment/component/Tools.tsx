import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import { languageSelector, userInfoSelector } from "@Redux/userInfo";
import { useDeleteCommentMutation } from "@Query/comment/useCommentMutation";

import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { CommentRefetch } from "@Molecules/comment/interface";

interface CommentToolsProps {
  refetch: () => CommentRefetch;
  comment: GetCommentsItem;
  onUpdateComment: () => void;
}

const CommentTools = ({
  comment,
  refetch,
  onUpdateComment,
}: CommentToolsProps) => {
  const deleteMutation = useDeleteCommentMutation();
  const language = useSelector(languageSelector);
  const userInfo = useSelector(userInfoSelector);

  const handleDeleteComment = () => {
    deleteMutation.mutate(
      { commentId: comment.id },
      {
        onSuccess: () => {
          toast.success("삭제 성공");
          refetch();
        },
        onError: (e) => {
          toast.error(e.message[language]);
        },
      }
    );
  };
  if (userInfo.name != comment.user.username) return <></>;
  return (
    <>
      {comment.deletedAt ? (
        <button>삭제 취소</button>
      ) : (
        <button onClick={handleDeleteComment}>삭제</button>
      )}
      <span> | </span>
      <button onClick={onUpdateComment}>수정</button>
    </>
  );
};
export default CommentTools;
