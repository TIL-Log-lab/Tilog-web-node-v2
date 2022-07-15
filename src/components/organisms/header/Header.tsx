import { useSelector } from "react-redux";

import NavBox from "@Components/box/NavBox";
import LoginButton from "@Components/molecules/button/LoginButton";
import Logo from "@Components/molecules/Logo";
import Profile from "@Components/organisms/header/profile/Profile";
import { userInfoSelector } from "@Redux/userInfo";

const Header = () => {
  const { isLogin } = useSelector(userInfoSelector);
  return (
    <NavBox>
      <Logo />
      {isLogin && <Profile />}
      {isLogin || <LoginButton />}
    </NavBox>
  );
};
export default Header;
