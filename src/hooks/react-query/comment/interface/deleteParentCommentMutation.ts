import {
  DeleteCommentRequestDto,
  GetCommentsItem,
  GetPostDetailResponseDto,
} from "@til-log.lab/tilog-api";

export default interface DeleteParentCommentMutation
  extends DeleteCommentRequestDto {
  postId: GetPostDetailResponseDto["id"];
  replyTo: GetCommentsItem["replyTo"];
}
