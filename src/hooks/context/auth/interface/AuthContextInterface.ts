import SetUserInfoType from "@Hooks/context/auth/interface/setUserInfoType";
import GetMeResponseTransFormSettingsDto from "@Library/api/users/interface/getMeResponseTransFormSettingsDto";

export default interface AuthContextInterface {
  userInfo: GetMeResponseTransFormSettingsDto | null;
  setUserInfo: SetUserInfoType;
  handleLogin: () => Window | null;
  handleLogout: () => Promise<void> | null;
}
