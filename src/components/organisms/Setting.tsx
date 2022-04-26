const OSetting = () => {
  return (
    <div className="px-20">
      <SettingInfo
        title="닉네임"
        subTitle="다른 사용자에게 표시될 이름을 변경할 수 있습니다"
      />
      <SettingInfo
        title="자기소개"
        subTitle="블로그메인, 프로필 카드에 표시될 소개를 설정할 수 있습니다"
      />
      <SettingInfo
        title="포지션"
        subTitle="자신의 포지션을 설정할수있습니다. @Backend, @Frontend"
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-fit">
          <h3 className="text-neutral-800">회원 탈퇴</h3>
          <p className="text-sm">
            모든 게시글을 비공개하고 서비스이용을 중단합니다
          </p>
        </div>
        <button className="h-10 text-white bg-black rounded w-36">탈퇴</button>
      </div>
    </div>
  );
};
export default OSetting;

const SettingInfo = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-fit">
          <h3 className="text-neutral-800">{title}</h3>
          <p className="text-sm">{subTitle}</p>
        </div>
        <input className="items-end w-2/3 p-5 text-right"></input>
      </div>
      <hr className="w-full my-10 border-neutral-300 dark:border-neutral-300" />
    </>
  );
};
