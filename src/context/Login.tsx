import { createContext, ReactNode, useState } from "react";
import OLogin from "src/components/Organisms/Login";
export const LoginContext = createContext({});

export const LoginModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <LoginContext.Provider value={handleOpen}>
      {isOpen && <OLogin />}
      {children}
    </LoginContext.Provider>
  );
};
