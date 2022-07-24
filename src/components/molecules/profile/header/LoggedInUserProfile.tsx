import React from "react";

import NoUserImage from "@Components/atom/images/user/NoUserImage";
import UserImage from "@Components/atom/images/user/UserImage";
import DropdownProfile from "@Components/molecules/profile/dropbox/DropdownProfile";
import useOutsideClickListener from "@Components/molecules/profile/dropbox/hooks/useOutsideClickListener";
import useGetMe from "@Hooks/react-query/useGetMe";

const LoggedInUserProfile = ({ className }: { className?: string }) => {
  const { data } = useGetMe();
  const { ref, isOpen, setIsOpen } = useOutsideClickListener();

  if (!data) return null;
  return (
    <div ref={ref}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {!data.data.avatar ? (
          <NoUserImage className={className} />
        ) : (
          <UserImage className={className} cursor avatar={data.data.avatar} />
        )}
      </button>

      {isOpen && <DropdownProfile />}
    </div>
  );
};

export default LoggedInUserProfile;
