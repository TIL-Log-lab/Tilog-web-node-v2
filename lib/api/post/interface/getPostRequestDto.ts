type DateScope = "All" | "Daily" | "Weekly" | "Monthly";
type SortScope = "likes" | "viewCounts" | "createdAt";
export default interface GetPostRequestDto {
  dateScope: DateScope;
  sortScope: SortScope;
  page: number;
  maxContent: number;
  userId?: number | undefined;
  categoryId?: number | undefined;
}
