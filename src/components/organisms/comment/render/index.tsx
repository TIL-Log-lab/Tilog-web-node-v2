// import CommentRender from "@Components/organisms/comment/render/CommentRender";
// import withComment from "@Components/organisms/comment/render/withComment";
// import { REPLY_CLOSE, REPLY_OPEN } from "@Constants/text/comment";
// import useGetChildCommentQuery from "@Hooks/react-query/comment/children/useGetChildCommentQuery";
// import { GetCommentsItem } from "@til-log.lab/tilog-api";
// import { useState } from "react";
import { useState } from "react";

import Spinner from "@Components/atom/loading/Spinner";
import CommentInput from "@Components/organisms/comment/input/CommentInput";
import Comment from "@Components/organisms/comment/render/Comment";
import { REPLY_CLOSE, REPLY_OPEN } from "@Constants/text/comment";
import useGetChildCommentQuery from "@Hooks/react-query/comment/children/useGetChildCommentQuery";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface ParentCommentsProps {
  comment: GetCommentsItem;
}
const CommentRender = ({ comment }: ParentCommentsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const childCommentList = useGetChildCommentQuery(
    isOpen,
    comment.postId,
    comment.id
  );

  return (
    <div className="p-4 border-b border-neutral-300">
      <Comment comment={comment} />
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
              <Comment comment={childComment} />
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
export default CommentRender;
// const CommentChild = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const childCommentList = useGetChildCommentQuery(
//     isOpen,
//     comment.postId,
//     comment.id
//   );
//   return (
//     <div className="p-4 border-b border-neutral-300">
//       <CommentRender comment={comment} />
//       <div>
//         <div className="text-right">
//           <button onClick={() => setIsOpen(!isOpen)} type="button">
//             <p className="hover:text-neutral-800 dark:hover:text-neutral-400">
//               {isOpen ? REPLY_CLOSE.ko : REPLY_OPEN.ko}
//             </p>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CommentParent = withComment(CommentRender);

// export default CommentParent;
