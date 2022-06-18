import Image from "next/image";
import { useRouter } from "next/router";

import safeTransferUserSetting from "@Utility/safeTransferUserSetting";
import UserCategoryCardList from "@Organisms/UserCategoryCardList";
import { PostCardListLinkedCategoryCardList } from "@Organisms/PostCardListLinkedCategoryCardList";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";

// TODO: UserInfo를 endpoint에서 가져와야합니다.
// TODO: router.query categoryId가 아닌 categoryName으로 카테고리를 가져와야합니다.
interface UserInfo extends GetMeResponseDto {
  id: number;
}
const OMyBlog = () => {
  const router = useRouter();
  const { category } = router.query;

  const userInfo: UserInfo = {
    id: 1,
    avatar: "https://avatars.githubusercontent.com/u/56459078?v=4",
    createdAt: "2022-04-22T02:45:56.000Z",
    name: "MINJE-98",
    settings: [
      { type: "INTRO_MSG", content: "소개글입니다. 잘부탁드려요." },
      { type: "DISPLAY_NAME", content: "조민제" },
      { type: "EMAIL", content: "minje9801@gmail.com" },
      { type: "POSITION", content: "프론트엔드 개발자입니다." },
    ],
  };
  return (
    <div className="grid grid-flow-row md:grid-flow-col md:justify-between">
      <div className="">
        <Profile userInfo={userInfo} />
        <hr className="w-full my-10 border-neutral-300 dark:border-neutral-300" />
        <UserCategoryCardList userId={userInfo.id} />
        <hr className="w-full my-10 border-neutral-300 dark:border-neutral-300" />
        <PinedRepo />
        <hr className="w-full my-10 border-neutral-300 dark:border-neutral-300" />
        <TopLangRepo />
        <hr className="w-full my-10 border-neutral-300 dark:border-neutral-300" />
      </div>
      <PostCardListLinkedCategoryCardList
        cardType="TYPE_A"
        queryKey={"categoryCard" + category}
        dateScope="All"
        sortScope="createdAt"
        page={0}
        maxContent={10}
        userId={1}
      />
    </div>
  );
};
export default OMyBlog;
const Profile = ({ userInfo }: { userInfo: GetMeResponseDto }) => {
  const userSettings = safeTransferUserSetting(userInfo.settings);
  return (
    <>
      <p className="text-lg text-neutral-600">Profile</p>
      <div className="flex flex-row items-center">
        {/**유저 이미지 */}
        {userInfo.avatar ? (
          <Image
            className="rounded-full"
            alt="avatar"
            width="50"
            height="50"
            src={userInfo.avatar}
          />
        ) : (
          <div className="w-[50px] mr-3 rounded-full h-[50px] bg-neutral-800" />
        )}
        <div>
          {userSettings.DISPLAY_NAME
            ? userSettings.DISPLAY_NAME
            : userInfo.name}
        </div>
        <div>
          <p className="block ml-3 text-sm">{userSettings.INTRO_MSG}</p>
          <p className="block ml-3 text-sm">{userSettings.POSITION}</p>
        </div>
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
