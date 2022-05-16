import { AiFillHeart } from "react-icons/ai";
import { BsDot, BsFillShareFill } from "react-icons/bs";

import formatDate from "@Date/formatDate";
import OTechIcons from "@Organisms/techIcons";
import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostDetailProps {
  postDetail: GetPostDetailResponseDto;
}
const PostDetail = ({ postDetail }: PostDetailProps) => {
  const { title, subTitle, createdAt } = postDetail;
  return (
    <article className="w-full">
      <header className="text-center">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <time>{formatDate(createdAt)}</time>
      </header>
    </article>
  );
};

export default PostDetail;
