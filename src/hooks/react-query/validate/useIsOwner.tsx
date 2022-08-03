import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

const useIsOwner = (userInfoId: PostDetailUserInfoItem["userId"]) => {
  const loggedInUser = useGetMeQuery();
  if (loggedInUser.isError) return false;
  if (!loggedInUser.data) return false;
  if (loggedInUser.data.id === userInfoId) return true;
  return false;
};

export default useIsOwner;
