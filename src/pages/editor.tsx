import type { GetServerSideProps, NextPage } from "next";

import { getPostDetail } from "@Api/adapter";
import Editor from "@Organisms/editor/Editor";
import OHeader from "@Organisms/Header";
import serverSideAuthentication from "@Auth/serverSideAuthentication";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";
interface PostDetailPageProps {
  post: GetPostDetailResponseDto;
}
const EditorPage: NextPage<PostDetailPageProps> = ({
  post,
}: PostDetailPageProps) => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader />
      <div className="flex justify-center align-middle">
        <Editor post={post} />
      </div>
    </div>
  );
};

export default EditorPage;
export const getServerSideProps: GetServerSideProps = serverSideAuthentication(
  async (store, context) => {
    const { query } = context;

    const postId = query.postId;
    if (!postId) return { props: { post: null } };
    if (Array.isArray(postId)) return { notFound: true };

    const username = store.getState().TILog_Info.name;
    try {
      const { data } = await getPostDetail(postId);
      if (data.user.username != username) {
        return {
          notFound: true,
        };
      }
      return {
        props: {
          post: data,
        },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }
);
