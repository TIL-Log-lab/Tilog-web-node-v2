import { useRef } from "react";

import EmptyAvatarImage from "@Components/atom/images/avatar/EmptyAvatarImage";
import LoginButton from "@Components/molecules/buttons/LoginButton";
import UserProfile from "@Components/molecules/profile/UserProfile";
import DropdownProfile from "@Components/organisms/header/profile/DropdownProfile";
import useOutsideClickAndEscClickListener from "@Hooks/event-listener/useOutsideClickAndEscClickListener";
import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

const HeaderUserProfile = () => {
  const { isLoading, isError, data } = useGetMeQuery();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener(dropDownRef);
  if (isLoading) {
    return (
      <div className="w-14 h-14">
        <EmptyAvatarImage />
      </div>
    );
  }
  if (isError) {
    return <LoginButton />;
  }

  return (
    <div ref={dropDownRef}>
      <button type="button" onClick={handleOpen}>
        <UserProfile className="w-14 h-14" avatar={data?.avatar} />
      </button>

      {isOpen && <DropdownProfile />}
    </div>
  );
};
export default HeaderUserProfile;
