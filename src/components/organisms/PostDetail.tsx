import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { BsDot, BsFillShareFill } from "react-icons/bs";

import formatDate from "@Date/formatDate";
import OTechIcons from "@Organisms/techIcons";
import MPostEditor from "@Molecules/PostEditor";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostDetailProps {
  postDetail: GetPostDetailResponseDto;
}
const PostDetail = ({ postDetail }: PostDetailProps) => {
  const { title, subTitle, createdAt, category, thumbnailUrl, content } =
    postDetail;
  return (
    <article className="w-full">
      <header className="text-center">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <time>{formatDate(createdAt)}</time>
      </header>
      <PostCategoryDivider categoryName={category.name} />
      <figure>
        {!thumbnailUrl ? (
          <div
            className={`w-full h-96 flex items-center justify-center bg-signature-color`}
          >
            {title}
          </div>
        ) : (
          <Image alt="thumbnail" src={thumbnailUrl}></Image>
        )}
      </figure>
      <div className="mt-2 lg:grid lg:grid-flow-col lg:space-x-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MPostEditor
            editorMode={false}
            preViewContent={JSON.parse(content)}
          />
        </div>
      </div>
    </article>
  );
};

export default PostDetail;

const PostCategoryDivider = ({ categoryName }: { categoryName: string }) => {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow border-t border-gray-400"></div>
      <div className="mx-4">
        <OTechIcons categoryName={categoryName} />
      </div>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};
