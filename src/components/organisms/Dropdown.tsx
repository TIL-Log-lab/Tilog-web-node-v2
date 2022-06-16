import { useDispatch, useSelector } from "react-redux";

import { logout } from "@Api/adapter";
import axiosInstance from "@Api/axiosInstance";
import WrappedLink from "@Molecules/WrappedLink";
import {
  languageSelector,
  userInfoSelector,
  userInfoSlice,
} from "@Redux/userInfo";

const Dropdown = () => {
  const userInfo = useSelector(userInfoSelector);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(userInfoSlice.actions.resetUserInfo());
      axiosInstance.defaults.headers.common["Authorization"] = "";
    } catch {
      // TODO: language error handling..
    }
  };
  return (
    <div
      className={`z-50 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div className="py-1" role="none">
        <WrappedLink
          href={`/blog/${userInfo.name}`}
          style="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
          text="내블로그"
        />
      </div>
      <div className="py-1" role="none">
        <WrappedLink
          href={`/editor`}
          style="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
          text="글쓰기"
        />
        <WrappedLink
          href={`/setting`}
          style="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
          text="설정"
        />
      </div>
      <div className="py-1" role="none">
        <a
          onClick={handleLogout}
          className="block px-4 py-2 text-lg text-gray-700 cursor-pointer font-eng-sub-font-1"
          role="menuitem"
          id="menu-item-6"
        >
          로그아웃
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
