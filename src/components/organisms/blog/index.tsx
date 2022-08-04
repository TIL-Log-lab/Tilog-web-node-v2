import { useRouter } from "next/router";

import Divider from "@Components/atom/Divider";
import BlogUserProfile from "@Components/organisms/blog/BlogUserProfile";
import UserCategoryButtonList from "@Components/organisms/blog/UserCategoryButtonList";
import PostCardList from "@Components/organisms/card-list/PostCardList";

// TODO: UserInfo를 endpoint에서 가져와야합니다.
// TODO: router.query categoryId가 아닌 categoryName으로 카테고리를 가져와야합니다.
const UserBlogDetail = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="grid justify-center grid-flow-row p-3 md:justify-between md:grid-flow-col">
      <div className="w-full max-w-[550px]">
        <BlogUserProfile userId={1} />
        <Divider />
        <UserCategoryButtonList userId={1} />
        <Divider />
        {/* TODO GITHUB STATUS LINK */}
        <p className="text-lg text-neutral-600">Pinned Repo</p>
        <div className="flex flex-col gap-y-1">
          <div className="h-20 rounded w-30 bg-neutral-500" />
          <div className="h-20 rounded w-30 bg-neutral-500" />
          <div className="h-20 rounded w-30 bg-neutral-500" />
          <div className="h-20 rounded w-30 bg-neutral-500" />
        </div>
        <Divider />

        {/* TODO GITHUB STATUS LINK */}
        <p className="text-lg text-neutral-600">TopLanguage Repo</p>
        <div className="flex flex-row gap-x-1">
          <div className="w-10 h-10 rounded bg-neutral-500" />
          <div className="w-10 h-10 rounded bg-neutral-500" />
          <div className="w-10 h-10 rounded bg-neutral-500" />
          <div className="w-10 h-10 rounded bg-neutral-500" />
          <div className="w-10 h-10 rounded bg-neutral-500" />
        </div>
        <Divider />
      </div>
      <PostCardList
        dateScope="All"
        sortScope="createdAt"
        page={0}
        categoryName={category}
        maxContent={10}
        userId={1}
      />
    </div>
  );
};
export default UserBlogDetail;
