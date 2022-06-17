import {
  CreatePostRequestBodyDto,
  GetCategoriesItem,
} from "@til-log.lab/tilog-api";

export default interface EditorType {
  subTitle: CreatePostRequestBodyDto["subTitle"];
  thumbnailUrl: CreatePostRequestBodyDto["thumbnailUrl"];
  markdownContent: CreatePostRequestBodyDto["markdownContent"];
  category: GetCategoriesItem;
  title: CreatePostRequestBodyDto["title"];
  isPrivate: CreatePostRequestBodyDto["isPrivate"];
}
