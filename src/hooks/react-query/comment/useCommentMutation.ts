import { createComment, deleteComment, updateComment } from "@Api/adapter";
import { useAuthMutation } from "@Query/auth-wrapper/useAuthMutation";
import {
  CreateCommentsRequestBodyDto,
  DeleteCommentRequestDto,
  UpdateCommentRequestDto,
} from "@til-log.lab/tilog-api";

export const useDeleteCommentMutation = () => {
  return useAuthMutation<DeleteCommentRequestDto>(
    ({ commentId }: { commentId: string }) =>
      deleteComment({
        commentId: commentId,
      })
  );
};

export const useUpdateCommentMutation = () => {
  return useAuthMutation<UpdateCommentRequestDto>(
    ({ commentId, content }: { commentId: string; content: string }) =>
      updateComment({
        commentId: commentId,
        content: content,
      })
  );
};

export const useCreateParentCommentMutation = () => {
  return useAuthMutation<CreateCommentsRequestBodyDto>((data) =>
    createComment(data)
  );
};
