import { useContext } from "react";

import { AuthContext } from "@Hooks/context/auth/AuthContext";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

const useIsOwner = (userInfoId: PostDetailUserInfoItem["userId"]) => {
  const { userInfo } = useContext(AuthContext);
  if (!userInfo) return false;
  if (userInfo.id === userInfoId) return true;
  return false;
};

export default useIsOwner;
