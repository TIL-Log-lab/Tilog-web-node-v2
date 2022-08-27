import LinkTo from "@Components/common/atom/LinkTo";
import { POST_EDIT } from "@Library/constants/post";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostUpdateLinkProps {
  postId: GetPostDetailResponseDto["id"];
}

const PostUpdateLink = ({ postId }: PostUpdateLinkProps) => {
  return (
    <LinkTo
      href={{
        pathname: "/writer",
        query: { postId },
      }}
      className="text-sm text-neutral-400 hover:text-neutral-500 h-fit"
    >
      {POST_EDIT.ko}
    </LinkTo>
  );
};
export default PostUpdateLink;
