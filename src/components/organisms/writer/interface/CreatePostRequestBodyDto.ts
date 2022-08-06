export default interface CreatePostRequestBodyDto {
  subTitle: string | null;
  thumbnailUrl: string | null;
  markdownContent: string | null;
  categoryId: number | null;
  title: string;
  isPrivate: boolean;
}
