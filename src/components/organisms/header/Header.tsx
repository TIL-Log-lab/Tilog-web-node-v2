import HeaderBox from "@Components/box/HeaderBox";
import LoginButton from "@Components/molecules/button/LoginButton";
import LinkTo from "@Components/molecules/LinkTo";
import Logo from "@Components/molecules/Logo";
import Profile from "@Components/organisms/header/profile/Profile";
import useGetMe from "@Hooks/react-query/useGetMe";

const Header = () => {
  const userInfo = useGetMe();
  return (
    <HeaderBox>
      <Logo className="grow mr- bg-neutral-800 dark:bg-neutral-300" />
      <div className="ml-auto shrink-0">
        {userInfo.isLoading && (
          <div className="w-[50px] rounded-full h-[50px] dark:bg-neutral-300 bg-neutral-800 cursor-pointer" />
        )}
        {userInfo.isSuccess && <Profile />}
        {userInfo.isError && <LoginButton />}
      </div>
    </HeaderBox>
  );
};
export default Header;
