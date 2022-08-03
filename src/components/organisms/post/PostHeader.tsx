import changeDateToDateFnsFormat from "@Library/date-fns/changeDateToDateFnsFormat";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostHeaderProps {
  post: GetPostDetailResponseDto;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <header className="text-center">
      <h1>{post.title}</h1>
      <h3>{post.subTitle}</h3>
      <p>{changeDateToDateFnsFormat(post.createdAt)}</p>
    </header>
  );
};

export default PostHeader;
