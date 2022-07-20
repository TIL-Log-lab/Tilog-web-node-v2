import { useRouter } from "next/router";

import PostCardListWithCategory from "@Components/organisms/card-list/post/PostCardListWithCategory";
import PostCardListWithoutCategory from "@Components/organisms/card-list/post/PostCardListWithoutCategory";

import GetPostRequestDto from "@Library/api/post/interface/getPostRequestDto";

const PostCardList = ({
  dateScope,
  sortScope,
  page,
  maxContent,
}: GetPostRequestDto) => {
  const router = useRouter();
  const { category } = router.query;

  if (!category || Array.isArray(category)) {
    return (
      <PostCardListWithoutCategory
        dateScope={dateScope}
        sortScope={sortScope}
        page={page}
        maxContent={maxContent}
      />
    );
  }

  return (
    <PostCardListWithCategory
      dateScope={dateScope}
      sortScope={sortScope}
      page={page}
      maxContent={maxContent}
      categoryName={category}
    />
  );
};
export default PostCardList;
