import { GetServerSideProps, NextPage } from "next";

import { DefaultSeoProps, NextSeo } from "next-seo";

import CategorySortButtonList from "@Components/common/organisms/list/CategorySortButtonList";
import { UserInfoProfile, PostCardList } from "@Components/modules/blog";
import useGetStringTypeToRouter from "@Hooks/router/useGetStringTypeToRouter";
import api from "@Library/api";
import { userBlogDetailSeo } from "@Library/utility/seo";
import RootBox from "@Components/common/atom/box/RootBox";

interface BlogPagePageProps {
  seo: DefaultSeoProps;
}
// TODO: 현재 BlogPage는 UserID 1 번을 반환하도록 하드 코딩되어 있습니다. userName로 전달받을 수 있게 변경된 후 코드를 변경해야합니다.
const BlogPage: NextPage<BlogPagePageProps> = ({ seo }: BlogPagePageProps) => {
  const category = useGetStringTypeToRouter("category");
  return (
    <div>
      <NextSeo {...seo} />
      <CategorySortButtonList userId={1} />

      <RootBox>
        <div className="grid justify-center grid-flow-row p-3 md:justify-between md:grid-flow-col">
          <div className="w-full max-w-[450px]">
            <UserInfoProfile userId={1} />
            <hr />
            {/* TODO GITHUB STATUS LINK */}
            <p className="text-lg text-neutral-600">Pinned Repo</p>
            <div className="flex flex-col gap-y-1">
              <div className="h-20 rounded w-30 bg-neutral-500" />
              <div className="h-20 rounded w-30 bg-neutral-500" />
              <div className="h-20 rounded w-30 bg-neutral-500" />
              <div className="h-20 rounded w-30 bg-neutral-500" />
            </div>
            <hr />

            {/* TODO GITHUB STATUS LINK */}
            <p className="text-lg text-neutral-600">TopLanguage Repo</p>
            <div className="flex flex-row gap-x-1">
              <div className="w-10 h-10 rounded bg-neutral-500" />
              <div className="w-10 h-10 rounded bg-neutral-500" />
              <div className="w-10 h-10 rounded bg-neutral-500" />
              <div className="w-10 h-10 rounded bg-neutral-500" />
              <div className="w-10 h-10 rounded bg-neutral-500" />
            </div>
            <hr />
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
      </RootBox>
    </div>
  );
};
export default BlogPage;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.query;
  if (!username) return { props: {} };
  if (Array.isArray(username)) return { props: {} };
  try {
    const data = await api.usersService.getUserProfile(1);
    const seo = userBlogDetailSeo(data);
    return {
      props: {
        seo,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
