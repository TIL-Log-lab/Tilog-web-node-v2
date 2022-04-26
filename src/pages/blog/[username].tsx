import { NextPage } from "next";
import { useRouter } from "next/router";

import OHeader from "@Organisms/Header";
import OMyBlog from "@Organisms/MyBlog";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";
interface BlogPageProps {
  user: GetMeResponseDto;
}

const BlogPage: NextPage<BlogPageProps> = ({ user }: BlogPageProps) => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div className="mx-10 sm:mx-30 xl:mx-60">
      <OHeader nav={username} userInfo={user} />
      <div className="mt-20">
        <OMyBlog />
      </div>
    </div>
  );
};
export default BlogPage;
