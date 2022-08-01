import LogoutButton from "@Components/molecules/button/LogoutButton";
import LinkTo from "@Components/molecules/LinkTo";
import CREATE_POST from "@Constants/text/createPost";
import MY_BLOG from "@Constants/text/myBlog";
import SETTINGS from "@Constants/text/settings";
import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

// TODO: i18n 적용.
const DropdownProfile = () => {
  const { data } = useGetMeQuery();
  if (!data) return null;
  return (
    <div className="relative z-50 inline-block text-left">
      <ol className="absolute right-0 w-40 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ">
        <li className="py-1" role="none">
          <LinkTo
            href={`/blog/${data.name}`}
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
          <LogoutButton />
        </li>
      </ol>
    </div>
  );
};

export default DropdownProfile;
