import ADivider from "@Atoms/Divider";
import MLoginButton from "src/components/Molecules/Login/Button";
import MTitleAndDesc from "src/components/Molecules/TitleAndDesc";

// DOTO: onClick을 버튼에 연결해줘야함.
const OLogin = () => {
  return (
    <div className="space-y-24">
      <MTitleAndDesc
        isCenter={true}
        space="2.5"
        title="로그인하고 계속"
        desc="개발자가 똑똑하게 기록을 하는 방법 TILog 에서 오늘 하루를 기록하세요"
      />
      <div className="flex flex-col items-center w-full space-y-10 ">
        <ADivider />
        <MLoginButton />
      </div>
    </div>
  );
};
export default OLogin;
