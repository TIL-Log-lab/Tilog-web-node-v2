import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Dispatch, SetStateAction, useState } from "react";

import { languageSelector } from "@Redux/userInfo";
import { useUpdateCommentMutation } from "@Query/comment/useCommentMutation";

import { CommentRefetch } from "@Molecules/comment/interface";

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
      <input
        className="w-full h-full px-4 text-sm text-gray-600 transition border border-gray-300 rounded-l-lg hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
        type="text"
        value={content}
        placeholder="댓글을 작성해주세요."
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button
        disabled={!content}
        className={`w-20 p-3 text-sm text-gray-600 transition border-t border-b border-r border-gray-300 rounded-r-lg dark:text-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          !content ? "" : " dark:hover:bg-gray-600 hover:bg-gray-50"
        }`}
        type="submit"
        onClick={handleCreateComment}
      >
        남기기
      </button>
    </div>
  );
};
export default CommentUpdateInput;
