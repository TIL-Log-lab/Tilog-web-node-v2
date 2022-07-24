import HeaderBox from "@Components/box/HeaderBox";
import Logo from "@Components/molecules/Logo";
import HeaderProfile from "@Components/molecules/profile/header/HeaderProfile";

const Header = () => {
  return (
    <HeaderBox>
      <Logo className="grow bg-neutral-800 dark:bg-neutral-300" />
      <div className="ml-auto shrink-0">
        <HeaderProfile className="w-14 h-14" />
      </div>
    </HeaderBox>
  );
};
export default Header;
