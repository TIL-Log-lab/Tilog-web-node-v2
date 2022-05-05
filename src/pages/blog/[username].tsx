import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import OHeader from "@Organisms/Header";
import OMyBlog from "@Organisms/MyBlog";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { getIronSession } from "iron-session";
import { cookieConfig } from "@Iron/cookieConfig";
interface BlogPageProps {
  userInfo: GetMeResponseDto;
}

const BlogPage: NextPage<BlogPageProps> = ({ userInfo }: BlogPageProps) => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav={username} userInfo={userInfo} />
      <div className="mt-20">
        <OMyBlog />
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userInfo } = await getIronSession(ctx.req, ctx.res, cookieConfig);
  return {
    props: { userInfo: userInfo },
  };
};
export default BlogPage;
