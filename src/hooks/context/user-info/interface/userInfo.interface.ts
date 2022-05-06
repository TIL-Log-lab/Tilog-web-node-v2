import { GetMeResponseDto } from "@til-log.lab/tilog-api";

export interface UserInfoInterface {
  userInfo: GetMeResponseDto | null;
  handleLogin: () => void;
  handleLogout: () => void;
}
