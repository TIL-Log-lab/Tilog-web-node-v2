import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

export interface ColorThumbNailProps {
  title: GetPostDetailResponseDto["title"];
  color: string;
}
