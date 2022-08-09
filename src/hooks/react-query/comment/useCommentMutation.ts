import { useMutation, useQueryClient } from "react-query";

import api from "@Library/api";

import { CreateCommentsRequestBodyDto } from "@til-log.lab/tilog-api";

import DeleteParentCommentMutation from "@Hooks/react-query/comment/interface/deleteParentCommentMutation";
import UpdateParentCommentMutationDto from "@Hooks/react-query/comment/interface/updateParentCommentMutationDto";

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ commentId }: DeleteParentCommentMutation) =>
      api.commentService.deleteComment({
        commentId,
      }),
    {
      onSuccess(_data, variables) {
        return variables.replyTo === "null"
          ? queryClient.refetchQueries(["comment", "parent", variables.postId])
          : queryClient.refetchQueries(["comment", "child", variables.replyTo]);
      },
    }
  );
};

export const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ commentId, content }: UpdateParentCommentMutationDto) =>
      api.commentService.updateComment({
        commentId,
        content,
      }),
    {
      onSuccess(_data, variables) {
        return variables.replyTo === "null"
          ? queryClient.refetchQueries(["comment", "parent", variables.postId])
          : queryClient.refetchQueries(["comment", "child", variables.replyTo]);
      },
    }
  );
};

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ content, postId, replyTo }: CreateCommentsRequestBodyDto) =>
      api.commentService.createComment({ content, postId, replyTo }),
    {
      onSuccess(_data, variables) {
        return variables.replyTo === null
          ? queryClient.refetchQueries(["comment", "parent", variables.postId])
          : queryClient.refetchQueries(["comment", "child", variables.replyTo]);
      },
    }
  );
};
