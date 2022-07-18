import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

export interface PostImageProps {
  id: GetPostDetailResponseDto["id"];
  title: GetPostDetailResponseDto["title"];
  thumbnailUrl: GetPostDetailResponseDto["thumbnailUrl"];
}
