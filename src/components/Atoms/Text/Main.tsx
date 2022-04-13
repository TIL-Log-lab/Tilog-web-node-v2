import { ReactNode } from "react";

interface ATextMainProps {
  styles: string;
  children: ReactNode;
}
const ATextMain = ({ styles, children }: ATextMainProps) => {
  return (
    <p className={`${styles} font-bold text-neutral-800 font-eng-sub-font-2`}>
      {children}
    </p>
  );
};
export default ATextMain;
