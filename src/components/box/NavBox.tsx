import { ReactNode } from "react";

interface NavBoxProps {
  children: ReactNode;
}

const NavBox = ({ children }: NavBoxProps) => (
  <nav className="flex justify-between mt-2">{children}</nav>
);
export default NavBox;
