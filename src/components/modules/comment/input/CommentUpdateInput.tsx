import PrimaryButton from "@Components/common/atom/buttons/PrimaryButton";
import SecondaryButton from "@Components/common/atom/buttons/SecondaryButton";
import useSubmitUpdateComment from "@Components/modules/comment/input/hooks/useSubmitUpdateComment";
import {
  COMMENT_PLACEHOLDER,
  UPDATE_COMMENT,
  UPDATE_COMMENT_CANCEL,
} from "@Library/constants/comment";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentInputProps {
  comment: GetCommentsItem;
  handleUpdate: () => void;
}
const CommentUpdateInput = ({ comment, handleUpdate }: CommentInputProps) => {
  const { handleSubmit, updateContent, errorMessage, handleComment } =
    useSubmitUpdateComment(comment, handleUpdate);
  return (
    <div>
      <div className="p-5 bg-neutral-100 dark:bg-neutral-800">
        <div className="mt-5">
          {errorMessage && <p className="text-rose-500">{errorMessage}</p>}
          <textarea
            className="w-full p-5"
            value={updateContent}
            placeholder={COMMENT_PLACEHOLDER.ko}
            onChange={handleComment}
          />
        </div>

        <div className="flex">
          <SecondaryButton
            isSubmit
            onClick={handleUpdate}
            className="rounded-none"
          >
            {UPDATE_COMMENT_CANCEL.ko}
          </SecondaryButton>
          <PrimaryButton
            isSubmit
            onClick={handleSubmit}
            className="rounded-none"
          >
            {UPDATE_COMMENT.ko}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CommentUpdateInput;
