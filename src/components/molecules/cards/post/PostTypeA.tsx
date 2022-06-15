import Link from "next/link";

import { GetPostsItem } from "@til-log.lab/tilog-api";
import { ImagePost } from "@Molecules/images/Post";

export const PostCardTypeA = ({ post }: { post: GetPostsItem }) => {
  return (
    <>
      <Link href={`/post/${post.id}`}>
        <a className="w-full p-3 bg-white rounded-sm" key={post.id}>
          <h3 className="text-sm">{post.title}</h3>
          <p className="mt-2 text-xs">{post.subTitle}</p>
          <div className="flex">
            <p>{post.category.name}</p>
            <div>{post.user.username}</div>
          </div>
        </a>
      </Link>
      <div className="relative w-1/2 h-full">
        <ImagePost thumbnailUrl={post.thumbnailUrl} title={post.title} />
      </div>
    </>
  );
};
