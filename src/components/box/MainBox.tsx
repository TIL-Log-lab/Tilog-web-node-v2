import { ReactNode } from "react";

interface MainBoxProps {
  children: ReactNode;
}
const MainBox = ({ children }: MainBoxProps) => {
  return <div className="mx-10 xl:mx-32 2xl:mx-60">{children}</div>;
};
export default MainBox;
