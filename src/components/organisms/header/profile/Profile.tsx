import React from "react";

import UserImage from "@Components/molecules/images/UserImage";
import LinkTo from "@Components/molecules/LinkTo";
import Dropdown from "@Components/organisms/header/profile/Dropdown";
import useOutsideClickListener from "@Components/organisms/header/profile/hooks/useOutsideClickListener";
import useGetMe from "@Hooks/react-query/useGetMe";

const Profile = () => {
  const { data } = useGetMe();
  const { ref, isOpen, setIsOpen } = useOutsideClickListener();
  if (!data) return null;
  return (
    <div ref={ref}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <UserImage />
      </button>

      {isOpen && <Dropdown />}
    </div>
  );
};

export default Profile;
