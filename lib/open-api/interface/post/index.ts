const PostSearchDateScope = {
  Daily: "Daily",
  Weekly: "Weekly",
  Monthly: "Monthly",
  All: "All",
} as const;

const PostSearchSortScope = {
  likes: "likes",
  viewCounts: "viewCounts",
  createdAt: "createdAt",
} as const;

type PostSearchSortScope =
  typeof PostSearchSortScope[keyof typeof PostSearchSortScope];

type PostSearchDateScope =
  typeof PostSearchDateScope[keyof typeof PostSearchDateScope];

export interface GetPostsRequestDto {
  dateScope: PostSearchDateScope;
  sortScope: PostSearchSortScope;
  page: number;
  maxContent: number;
  userId?: number;
  categoryId?: number;
}
