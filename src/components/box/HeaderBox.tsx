import { ReactNode } from "react";

interface NavBoxProps {
  children: ReactNode;
}

const HeaderBox = ({ children }: NavBoxProps) => (
  <header className="border-b border-neutral-250">
    <div className="flex m-auto max-w-[1280px] h-20 items-center px-5">
      {children}
    </div>
  </header>
);
export default HeaderBox;
