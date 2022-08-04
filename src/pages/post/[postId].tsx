import { GetServerSideProps, NextPage } from "next";

import { DefaultSeo, DefaultSeoProps } from "next-seo";

import PostDetail from "@Components/organisms/post";
import api from "@Library/api";

interface PostDetailPageProps {
  seo: DefaultSeoProps;
  postId: string;
}
const PostDetailPage: NextPage<PostDetailPageProps> = ({
  seo,
  postId,
}: PostDetailPageProps) => {
  return (
    <div>
      <DefaultSeo {...seo} />
      <div className="mx-10 xl:mx-60">
        <div className="flex flex-col items-center pt-20 text-center">
          <PostDetail postId={postId} />
        </div>
      </div>
    </div>
  );
};
export default PostDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.query;
  if (!postId) return { props: {} };
  if (Array.isArray(postId)) return { props: {} };
  try {
    const { data } = await api.postService.getPostDetail(postId);
    const seo: DefaultSeoProps = {
      title: data.title,
      description: !data.subTitle ? "" : data.subTitle,
      openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "tilog.io",
        title: data.title,
        site_name: "TILog",
        article: {
          publishedTime: data.createdAt,
          modifiedTime: !data.updatedAt ? "" : data.updatedAt,
          authors: [data.user.username],
          tags: [data.category.name],
        },
        images: [
          {
            url: !data.thumbnailUrl ? "" : data.thumbnailUrl,
            width: 285,
            height: 167,
            alt: "TILog_thumbnailUrl",
          },
        ],
      },
    };
    return {
      props: {
        seo,
        postId: data.id,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
