import { useContext } from "react";

import LinkTo from "@Components/common/atom/LinkTo";
import LogoutButton from "@Components/common/molecules/buttons/LogoutButton";
import { AuthContext } from "@Hooks/context/auth/AuthContext";
import {
  CREATE_POST,
  LOGOUT,
  MY_BLOG,
  SETTINGS,
} from "@Library/constants/dropdown";

const DropdownProfile = () => {
  const { userInfo } = useContext(AuthContext);
  if (!userInfo) return null;
  return (
    <div className="relative z-50 inline-block text-left">
      <ol className="absolute right-0 w-40 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ">
        <li className="py-1" role="none">
          <LinkTo
            href={`/blog/${userInfo.name}`}
            className="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
          >
            {MY_BLOG.ko}
          </LinkTo>
        </li>
        <li className="py-1" role="none">
          <LinkTo
            href="/writer"
            className="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
          >
            {CREATE_POST.ko}
          </LinkTo>
          <LinkTo
            href="/settings"
            className="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
          >
            {SETTINGS.ko}
          </LinkTo>
        </li>
        <li className="py-1" role="none">
          <LogoutButton>{LOGOUT.ko}</LogoutButton>
        </li>
      </ol>
    </div>
  );
};

export default DropdownProfile;
