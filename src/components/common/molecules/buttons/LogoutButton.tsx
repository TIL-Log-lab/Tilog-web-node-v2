import { useContext } from "react";

import { AuthContext } from "@Hooks/context/auth/AuthContext";

interface LogoutButtonProps {
  children: string;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <button type="button" onClick={handleLogout}>
      <span className="block px-4 py-2 text-lg text-gray-700 cursor-pointer hover:underline font-eng-sub-font-1">
        {children}
      </span>
    </button>
  );
};
export default LogoutButton;
