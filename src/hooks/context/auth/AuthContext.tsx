import { createContext } from "react";

import AuthContextInterface from "@Hooks/context/auth/interface/AuthContextInterface";

export const AuthContext = createContext<AuthContextInterface>({
  userInfo: null,
  setUserInfo: () => {},
  handleLogin: () => null,
  handleLogout: () => null,
});
