import { ReactNode } from "react";

interface ATextSubProps {
  styles: string;
  children: ReactNode;
}
const ATextSub = ({ styles, children }: ATextSubProps) => {
  return (
    <p className={`${styles} text-neutral-400 font-eng-sub-font-2`}>
      {children}
    </p>
  );
};
export default ATextSub;
