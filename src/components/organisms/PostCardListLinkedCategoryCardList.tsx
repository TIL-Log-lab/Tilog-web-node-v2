import { useRouter } from "next/router";

import PostCardList from "@Organisms/PostCardList";

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
  const { category } = router.query;

  if (!category || Array.isArray(category)) {
    return (
      <>
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

  return (
    <>
      {category && (
        <PostCardList
          queryKey={props.queryKey + category}
          cardTitle={category}
          dateScope={props.dateScope}
          sortScope={props.sortScope}
          page={props.page}
          maxContent={props.maxContent}
          cardType={props.cardType}
          categoryId={parseInt(category)}
          userId={props.userId}
        />
      )}
    </>
  );
};
