import { useContext, useRef } from "react";

import LoginButton from "@Components/common/molecules/buttons/LoginButton";
import ProfileImage from "@Components/common/molecules/images/ProfileImage";
import DropdownProfile from "@Components/common/organisms/header/profile/DropdownProfile";
import { AuthContext } from "@Hooks/context/auth/AuthContext";
import useOutsideClickAndEscClickListener from "@Hooks/event-listener/useOutsideClickAndEscClickListener";

import AuthContextInterface from "@Hooks/context/auth/interface/AuthContextInterface";

const HeaderUserProfile = () => {
  const { userInfo } = useContext<AuthContextInterface>(AuthContext);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener(dropDownRef);
  if (!userInfo) {
    return <LoginButton />;
  }

  return (
    <div ref={dropDownRef}>
      <button type="button" onClick={handleOpen}>
        <ProfileImage className="w-14 h-14" avatar={userInfo.avatar} />
      </button>

      {isOpen && <DropdownProfile />}
    </div>
  );
};
export default HeaderUserProfile;
