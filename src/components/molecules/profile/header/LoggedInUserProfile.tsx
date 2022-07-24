import React from "react";

import NoUserImage from "@Components/atom/images/user/NoUserImage";
import UserImage from "@Components/atom/images/user/UserImage";
import DropdownProfile from "@Components/molecules/profile/dropbox/DropdownProfile";
import useOutsideClickListener from "@Components/molecules/profile/dropbox/hooks/useOutsideClickListener";
import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

const LoggedInUserProfile = ({ className }: { className?: string }) => {
  const { data } = useGetMeQuery();
  const { ref, isOpen, setIsOpen } = useOutsideClickListener();

  if (!data) return null;
  return (
    <div ref={ref}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {!data.avatar ? (
          <NoUserImage className={className} />
        ) : (
          <UserImage className={className} cursor avatar={data.avatar} />
        )}
      </button>

      {isOpen && <DropdownProfile />}
    </div>
  );
};

export default LoggedInUserProfile;
