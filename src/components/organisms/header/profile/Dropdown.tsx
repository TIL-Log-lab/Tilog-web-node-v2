import LogoutButton from "@Components/molecules/button/LogoutButton";
import LinkTo from "@Components/molecules/LinkTo";
import CREATE_POST from "@Constants/text/createPost";
import MY_BLOG from "@Constants/text/myBlog";
import SETTINGS from "@Constants/text/settings";
import useGetMe from "@Hooks/react-query/useGetMe";

const Dropdown = () => {
  const { data } = useGetMe();
  if (!data) return null;
  return (
    <div className="relative z-50 inline-block text-left">
      <ol className="absolute right-0 w-40 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ">
        <li className="py-1" role="none">
          <LinkTo
            href={`/blog/${data.data.name}`}
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
    </div>
  );
};

export default Dropdown;
