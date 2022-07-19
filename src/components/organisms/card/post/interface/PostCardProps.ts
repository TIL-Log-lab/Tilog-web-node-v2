import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

export default interface PostCardProps extends GetPostDetailResponseDto {
  private: number;
}
