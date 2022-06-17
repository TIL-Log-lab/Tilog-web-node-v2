import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Dispatch, SetStateAction, useState } from "react";

import { languageSelector } from "@Redux/userInfo";
import { useUpdateCommentMutation } from "@Query/comment/useCommentMutation";

import { CommentRefetch } from "@Organisms/comment/interface";
import CommentInput from "@Molecules/input/Comment";
import SubmitButton from "@Molecules/button/Submit";

interface CommentUpdateProps {
  refetch: () => CommentRefetch;
  prevContent: string;
  commentId: string;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
}
const CommentUpdateInput = ({
  commentId,
  prevContent,
  refetch,
  setIsUpdate,
}: CommentUpdateProps) => {
  const [content, setContent] = useState(prevContent);
  const mutation = useUpdateCommentMutation();
  const language = useSelector(languageSelector);

  const handleCreateComment = () => {
    mutation.mutate(
      {
        commentId: commentId,
        content,
      },
      {
        onSuccess: () => {
          refetch();
          setContent("");
          setIsUpdate(false);
        },
        onError: (e) => {
          toast.error(e.message[language]);
        },
      }
    );
  };
  return (
    /* Comment input */
    <div className="flex w-full mt-10 bg-gray-100 rounded-lg h-28 dark:bg-gray-700">
      <CommentInput
        content={content}
        placeholder="댓글을 입력해주세요."
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <SubmitButton content={content} onClick={handleCreateComment} />
    </div>
  );
};
export default CommentUpdateInput;
