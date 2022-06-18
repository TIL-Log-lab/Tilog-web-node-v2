import Link from "next/link";
import { useSelector } from "react-redux";

import PostLike from "@Organisms/LikeButton";
import TechIcons from "@TechIcons/TechIcons";
import MPostEditor from "@Molecules/PostEditor";
import { userInfoSelector } from "@Redux/userInfo";
import { ImagePost } from "@Molecules/images/Post";
import UnLikeButton from "@Molecules/button/UnLike";
import CategoryDivider from "@Molecules/category/CategoryDivider";
import changeDateToDateFnsFormat from "@DateFns/changeDateToDateFnsFormat";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";
interface PostDetailProps {
  post: GetPostDetailResponseDto;
}
const OPostDetail = ({ post }: PostDetailProps) => {
  const userInfo = useSelector(userInfoSelector);

  return (
    <article className="w-full">
      <header className="text-center">
        <h1>{post.title}</h1>
        <h3>{post.subTitle}</h3>
        <time>{changeDateToDateFnsFormat(post.createdAt)}</time>
      </header>
      <CategoryDivider categoryName={post.category.name} />
      <figure>
        <ImagePost thumbnailUrl={post.thumbnailUrl} title={post.title} />
      </figure>
      <div className="mt-2 lg:grid lg:grid-flow-col lg:space-x-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MPostEditor
            editorMode={false}
            preViewContent={JSON.parse(post.content)}
          />
        </div>
        <section className="flex flex-col space-y-2">
          <div className="w-full p-5 rounded h-fit bg-slate-200">
            {userInfo.name === post.user.username ? (
              <Link
                href={{
                  pathname: "/editor",
                  query: { postId: post.id },
                }}
              >
                게시글 수정
              </Link>
            ) : (
              <>
                {post.user.username}
                <Link href={`/blog/${post.user.username}`}>
                  <a className="flex items-center justify-center w-full h-10 text-white rounded bg-signature-color">
                    게시글 보기
                  </a>
                </Link>
              </>
            )}
          </div>
          <div className="flex flex-row items-center justify-center p-2 rounded bg-slate-300 ">
            <div className="mr-3 text-3xl">
              <TechIcons categoryName={post.category.name} />
            </div>
            <h3>{post.category.name}</h3>
          </div>
          <div className="flex flex-row justify-center p-2 space-x-2 rounded bg-slate-400">
            {userInfo.isLogin ? (
              <PostLike postId={post.id} likeCount={post.like} />
            ) : (
              <div className="flex items-center gap-x-4">
                <UnLikeButton />
                <span className="text-2xl font-semibold text-neutral-700">
                  {post.like}
                </span>
              </div>
            )}
          </div>
        </section>
      </div>
    </article>
  );
};

export default OPostDetail;
