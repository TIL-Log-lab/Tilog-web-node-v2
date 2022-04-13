import { ReactNode } from "react";

interface ATextCautionProps {
  styles: string;
  children: ReactNode;
}
const ATextCaution = ({ styles, children }: ATextCautionProps) => {
  return (
    <p className={`${styles} text-rose-500 font-eng-sub-font-2`}>{children}</p>
  );
};
export default ATextCaution;
