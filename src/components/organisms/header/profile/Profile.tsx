import React from "react";

import UserImage from "@Components/molecules/images/UserImage";
import Dropdown from "@Components/organisms/header/profile/Dropdown";
import useOutsideClickListener from "@Components/organisms/header/profile/hooks/useOutsideClickListener";

const Profile = () => {
  const { ref, isOpen, setIsOpen } = useOutsideClickListener();
  return (
    <div ref={ref} className="z-10">
      <div className="relative inline-block text-left">
        <UserImage onClick={() => setIsOpen(!isOpen)} />
        {isOpen && <Dropdown />}
      </div>
    </div>
  );
};

export default Profile;
