import LogoLink from "@Components/molecules/link/LogoLink";
import HeaderUserProfile from "@Components/organisms/header/profile/HeaderUserProfile";

const Header = () => {
  return (
    <header className="border-b border-neutral-250">
      <div className="flex m-auto max-w-[1280px] h-20 items-center px-5">
        <LogoLink className="grow bg-neutral-800 dark:bg-neutral-300" />
        <div className="ml-auto shrink-0">
          <HeaderUserProfile />
        </div>
      </div>
    </header>
  );
};
export default Header;
