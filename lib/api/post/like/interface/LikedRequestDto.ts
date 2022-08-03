import {
  SetLikedRequestDto,
  UnsetLikedRequestDto,
} from "@til-log.lab/tilog-api";

type LikedRequestDto =
  | SetLikedRequestDto["postId"]
  | UnsetLikedRequestDto["postId"];

export default LikedRequestDto;
