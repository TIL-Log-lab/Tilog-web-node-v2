import { useSelector } from "react-redux";

import LogoutButton from "@Components/molecules/button/LogoutButton";
import LinkTo from "@Components/molecules/LinkTo";
import CREATE_POST from "@Constants/text/createPost";
import MY_BLOG from "@Constants/text/myBlog";
import SETTINGS from "@Constants/text/settings";
import { userInfoSelector } from "@Redux/userInfo";

const Dropdown = () => {
  const userInfo = useSelector(userInfoSelector);
  return (
    <ol className="absolute right-0 bg-white divide-y divide-gray-100 rounded-md shadow-lg ">
      <li className="w-40 py-1" role="none">
        <LinkTo
          href={`/blog/${userInfo.name}`}
          className="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
        >
          {MY_BLOG.ko}
        </LinkTo>
      </li>
      <li className="py-1" role="none">
        <LinkTo
          href="/editor"
          className="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
        >
          {CREATE_POST.ko}
        </LinkTo>
        <LinkTo
          href="/setting"
          className="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
        >
          {SETTINGS.ko}
        </LinkTo>
      </li>
      <li className="py-1" role="none">
        <LogoutButton />
      </li>
    </ol>
  );
};

export default Dropdown;
