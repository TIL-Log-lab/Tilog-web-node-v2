import { useState } from "react";

import LinkTo from "@Components/atom/LinkTo";
import Spinner from "@Components/atom/loading/Spinner";
import PublishDate from "@Components/atom/text/PublishDate";
import UserProfile from "@Components/molecules/profile/UserProfile";
import CommentContents from "@Components/organisms/comment/content/CommentContents";
import CommentInput from "@Components/organisms/comment/input/CommentInput";
import CommentUpdateInput from "@Components/organisms/comment/input/CommentUpdateInput";
import CommentChildren from "@Components/organisms/comment/render/CommentChildren";
import CommentTools from "@Components/organisms/comment/tools/CommentTools";
import useGetChildCommentQuery from "@Hooks/react-query/comment/children/useGetChildCommentQuery";

import { GetCommentsItem } from "@til-log.lab/tilog-api";
import { REPLY_CLOSE, REPLY_OPEN } from "@Constants/text/comment";

interface ParentCommentsProps {
  comment: GetCommentsItem;
}
const CommentParent = ({ comment }: ParentCommentsProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleUpdate = () => {
    setIsUpdate(!isUpdate);
  };
  const childCommentList = useGetChildCommentQuery(
    isOpen,
    comment.postId,
    comment.id
  );

  return (
    <div className="p-4 border-b border-neutral-300">
      <div className="flex items-center gap-x-2 shrink-0 ">
        <LinkTo href={`/blog/${comment.user.username}`}>
          <UserProfile className="w-10 h-10" avatar={comment.user.avatar}>
            <div>
              <p className="font-semibold">{comment.user.username}</p>
              <PublishDate
                className="mt-[1px] line-clamp-1 text-[5px] text-neutral-500 dark:text-neutral-300"
                date={comment.createdAt}
              />
            </div>
          </UserProfile>
        </LinkTo>
        <div className="ml-auto">
          <CommentTools handleUpdate={handleUpdate} comment={comment} />
        </div>
      </div>

      <div className="p-5">
        {isUpdate ? (
          <CommentUpdateInput handleUpdate={handleUpdate} comment={comment} />
        ) : (
          <CommentContents comment={comment} />
        )}
      </div>
      <div>
        <div className="text-right">
          <button onClick={() => setIsOpen(!isOpen)} type="button">
            <p className="hover:text-neutral-800 dark:hover:text-neutral-400">
              {isOpen ? REPLY_CLOSE.ko : REPLY_OPEN.ko}
            </p>
          </button>
        </div>
        <div className="mx-6">
          {isOpen &&
            childCommentList.isSuccess &&
            childCommentList.data.data.list.map((childComment) => (
              <CommentChildren comment={childComment} />
            ))}
          {isOpen && childCommentList.isLoading && <Spinner size="20" />}
          {isOpen && (
            <CommentInput postId={comment.postId} replyTo={comment.id} />
          )}
        </div>
      </div>
    </div>
  );
};
export default CommentParent;
