const OMyBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between">
      <div className="">
        <Profile />
        <hr className="w-full my-10 border-neutral-300 dark:border-neutral-300" />
        <CategoryList />
        <hr className="w-full my-10 border-neutral-300 dark:border-neutral-300" />
        <PinedRepo />
        <hr className="w-full my-10 border-neutral-300 dark:border-neutral-300" />
        <TopLangRepo />
        <hr className="w-full my-10 border-neutral-300 dark:border-neutral-300" />
      </div>
      <div className="">
        <PostList />
      </div>
    </div>
  );
};
export default OMyBlog;
const PostList = () => {
  const Post = () => (
    <div className="mt-2 md:max-w-lg">
      <div className="flex">
        <div className="p-8 bg-white">
          <h3 className="text-sm">Finding customers for your</h3>
          <p className="mt-2 text-xs">
            Getting a new business off the ground is a lot of hard work.
          </p>
        </div>
        <div className="md:shrink-0">
          <div className="h-full w-60 bg-signature-color"></div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <p className="text-lg text-neutral-600">Posts</p>
      <Post />
      <Post />
      <Post />
    </>
  );
};
const CategoryList = () => {
  const CategoryButton = () => (
    <a className="text-sm font-medium cursor-pointer hover:text-nestjs">
      #NestJS
    </a>
  );
  return (
    <>
      <p className="text-lg text-neutral-600">Category</p>
      <div>
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
      </div>
    </>
  );
};
const Profile = () => {
  return (
    <>
      <p className="text-lg text-neutral-600">Profile</p>
      <div className="flex flex-row items-center">
        <div className="w-[50px] mr-3 rounded-full h-[50px] bg-neutral-800" />
        <div>MINJE-98</div>
        <p className="ml-3 text-sm">10일 전</p>
      </div>
    </>
  );
};
const PinedRepo = () => {
  return (
    <>
      <p className="text-lg text-neutral-600">Pinned Repo</p>
      <div className="flex flex-col gap-y-1">
        <div className="h-20 rounded w-30 bg-neutral-500" />
        <div className="h-20 rounded w-30 bg-neutral-500" />
        <div className="h-20 rounded w-30 bg-neutral-500" />
        <div className="h-20 rounded w-30 bg-neutral-500" />
      </div>
    </>
  );
};

const TopLangRepo = () => {
  return (
    <>
      <p className="text-lg text-neutral-600">TopLanguage Repo</p>
      <div className="flex flex-row gap-x-1">
        <div className="w-10 h-10 rounded bg-neutral-500" />
        <div className="w-10 h-10 rounded bg-neutral-500" />
        <div className="w-10 h-10 rounded bg-neutral-500" />
        <div className="w-10 h-10 rounded bg-neutral-500" />
        <div className="w-10 h-10 rounded bg-neutral-500" />
      </div>
    </>
  );
};
