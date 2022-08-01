import NoUserImage from "@Components/atom/images/user/NoUserImage";
import LoginButton from "@Components/molecules/button/LoginButton";
import LoggedInUserProfile from "@Components/molecules/profile/header/LoggedInUserProfile";
import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

interface HeaderProfileProps {
  className?: string;
}
const HeaderProfile = ({ className }: HeaderProfileProps) => {
  const { isLoading, isError } = useGetMeQuery();
  if (isLoading) {
    return <NoUserImage className={className} />;
  }
  if (isError) {
    return <LoginButton />;
  }
  return <LoggedInUserProfile className={className} />;
};
export default HeaderProfile;
