import { useState } from "react";

import CommentInput from "@Components/modules/comment/input/CommentInput";
import CommentRender from "@Components/modules/comment/render/CommentRender";
import {
  REPLY_CLOSE,
  REPLY_INPUT,
  REPLY_OPEN,
  REPLY_PLACEHOLDER,
} from "@Library/constants/comment";
import useGetChildCommentQuery from "@Hooks/react-query/comment/children/useGetChildCommentQuery";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface RootCommentProps {
  comment: GetCommentsItem;
}
const RootComment = ({ comment }: RootCommentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const childCommentList = useGetChildCommentQuery(
    isOpen,
    comment.postId,
    comment.id
  );

  return (
    <div className="p-4">
      <div>
        <CommentRender comment={comment} />
        <div>
          <div className="text-right">
            <button onClick={() => setIsOpen(!isOpen)} type="button">
              {isOpen ? (
                <p className="hover:text-neutral-500 dark:hover:text-neutral-400 text-neutral-800 dark:text-neutral-300">
                  {REPLY_CLOSE.ko}
                </p>
              ) : (
                <p className="hover:text-neutral-800 dark:hover:text-neutral-300">
                  {REPLY_OPEN.ko}
                </p>
              )}
            </button>
          </div>
        </div>

        <div className="mx-6">
          {isOpen &&
            childCommentList.isSuccess &&
            childCommentList.data.data.list.map((childComment) => (
              <CommentRender key={childComment.id} comment={childComment} />
            ))}
          {isOpen && (
            <CommentInput
              postId={comment.postId}
              replyTo={comment.id}
              placeholder={REPLY_PLACEHOLDER.ko}
              buttonText={REPLY_INPUT.ko}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default RootComment;
