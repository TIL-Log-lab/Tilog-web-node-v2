import { useState } from "react";

import LinkTo from "@Components/atom/LinkTo";
import PublishDate from "@Components/atom/text/PublishDate";
import UserProfile from "@Components/molecules/profile/UserProfile";
import CommentContents from "@Components/organisms/comment/content/CommentContents";
import CommentUpdateInput from "@Components/organisms/comment/input/CommentUpdateInput";
import CommentTools from "@Components/organisms/comment/tools/CommentTools";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentRenderProps {
  comment: GetCommentsItem;
}
const Comment = ({ comment }: CommentRenderProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const handleUpdate = () => {
    setIsUpdate(!isUpdate);
  };
  return (
    <div key={comment.id}>
      <div className="flex items-center gap-x-2 shrink-0">
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
    </div>
  );
};
export default Comment;
