import PrimaryButton from "@Components/common/atom/buttons/PrimaryButton";
import LinkTo from "@Components/common/atom/LinkTo";
import { DIRECT_OWNER_BLOG } from "@Library/constants/post";

interface UserBlogButtonProps {
  userName: string;
}

const UserBlogLink = ({ userName }: UserBlogButtonProps) => {
  return (
    <LinkTo href={`/blog/${userName}`} className="text-neutral-50">
      <PrimaryButton>
        {userName}
        {DIRECT_OWNER_BLOG.ko}
      </PrimaryButton>
    </LinkTo>
  );
};

export default UserBlogLink;
