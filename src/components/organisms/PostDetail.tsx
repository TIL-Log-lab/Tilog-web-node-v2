import Link from "next/link";
import Image from "next/image";

import formatDate from "@Date/formatDate";
import OTechIcons from "@Organisms/techIcons";
import MPostEditor from "@Molecules/PostEditor";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";
import MButtonLike from "@Molecules/button/Like";

interface PostDetailProps {
  postDetail: GetPostDetailResponseDto;
}
const OPostDetail = ({ postDetail }: PostDetailProps) => {
  const {
    id,
    title,
    subTitle,
    createdAt,
    category,
    thumbnailUrl,
    content,
    user,
    like,
  } = postDetail;

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
        <section className="flex flex-col space-y-2">
          <div className="w-full p-5 rounded h-fit bg-slate-200">
            {user.username}
            <Link href={`/blog/${user.username}`}>
              <a className="flex items-center justify-center w-full h-10 text-white rounded bg-signature-color">
                게시글 보기
              </a>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center p-2 rounded bg-slate-300 ">
            <div className="mr-3 text-3xl">
              <OTechIcons categoryName={category.name} />
            </div>
            <h3>{category.name}</h3>
          </div>
          <div className="flex flex-row justify-center p-2 space-x-2 rounded bg-slate-400">
            <MButtonLike postId={id} likeCount={like} />
          </div>
        </section>
      </div>
    </article>
  );
};

export default OPostDetail;

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
