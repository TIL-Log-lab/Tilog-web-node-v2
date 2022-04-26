import { NextPage } from "next";
import { useRouter } from "next/router";

import OComment from "src/components/organisms/Comment";
import OHeader from "src/components/organisms/Header";
import PostDetail from "src/components/organisms/PostDetail";

import {
  GetAccessTokenUsingRefreshTokenResponse,
  GetMeResponseDto,
} from "@til-log.lab/tilog-api";
interface PostDetailPageProps {
  accessToken: GetAccessTokenUsingRefreshTokenResponse;
  userInfo: GetMeResponseDto;
}
const PostDetailPage: NextPage<PostDetailPageProps> = ({
  accessToken,
  userInfo,
}: PostDetailPageProps) => {
  const router = useRouter();
  const { username } = router.query;

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
