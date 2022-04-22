import OComment from "@Organisms/Comment";
import OHeader from "@Organisms/Header";
import PostDetail from "@Organisms/PostDetail";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { NextPage } from "next";
import { useRouter } from "next/router";
interface PostDetailPageProps {
  accessToken: string;
  userInfo: GetMeResponseDto | null;
}
const PostDetailPage: NextPage<PostDetailPageProps> = ({
  accessToken,
  userInfo,
}: PostDetailPageProps) => {
  const router = useRouter();
  const { username } = router.query;
  console.log(accessToken);

  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav={username + ".log"} userInfo={userInfo} />
      <div className="flex flex-col items-center pt-20 text-center">
        <PostDetail />
      </div>
      <OComment />
    </div>
  );
};
export default PostDetailPage;
