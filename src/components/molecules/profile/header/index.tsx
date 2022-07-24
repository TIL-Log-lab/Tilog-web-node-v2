import NoUserImage from "@Components/atom/images/user/NoUserImage";
import LoginButton from "@Components/molecules/button/LoginButton";
import LoggedInUserProfile from "@Components/molecules/profile/header/LoggedInUserProfile";
import useGetMe from "@Hooks/react-query/useGetMe";

interface HeaderProfileProps {
  className?: string;
}
const HeaderProfile = ({ className }: HeaderProfileProps) => {
  const { isLoading, isError } = useGetMe();
  if (isLoading) {
    return <NoUserImage className={className} />;
  }
  if (isError) {
    return <LoginButton />;
  }
  return <LoggedInUserProfile className={className} />;
};
export default HeaderProfile;
