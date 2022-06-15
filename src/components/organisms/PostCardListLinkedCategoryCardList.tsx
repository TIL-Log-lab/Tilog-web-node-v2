import { useRouter } from "next/router";

import PostCardList from "@Organisms/PostCardList";
import CategoryCardList from "@Organisms/CategoryCardList";

import { GetPostsRequestDto } from "@Api/interface/post";

interface PostCardListLinkedCategoryCardListProps extends GetPostsRequestDto {
  queryKey: string;
  cardType: "TYPE_A" | "TYPE_B";
}

// TODO: 카테고리 이름검색으로 구현 해야합니다.
export const PostCardListLinkedCategoryCardList = (
  props: PostCardListLinkedCategoryCardListProps
) => {
  const router = useRouter();
  const category = router.query.category;

  if (!category || Array.isArray(category)) {
    return (
      <>
        <CategoryCardList />
        <PostCardList
          queryKey={props.queryKey + category}
          cardTitle={"카테고리 : " + category}
          dateScope={props.dateScope}
          sortScope={props.sortScope}
          page={props.page}
          maxContent={props.maxContent}
          cardType={props.cardType}
          userId={props.userId}
        />
      </>
    );
  }
  const parseIntCategoryId = parseInt(category);

  return (
    <>
      <CategoryCardList selectedCategory={parseIntCategoryId} />
      {category && (
        <PostCardList
          queryKey={props.queryKey + category}
          cardTitle={category}
          dateScope={props.dateScope}
          sortScope={props.sortScope}
          page={props.page}
          maxContent={props.maxContent}
          cardType={props.cardType}
          categoryId={parseIntCategoryId}
          userId={props.userId}
        />
      )}
    </>
  );
};
