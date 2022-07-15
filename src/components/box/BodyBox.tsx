import { ReactNode } from "react";

interface BodyBoxProps {
  children: ReactNode;
}
const BodyBox = ({ children }: BodyBoxProps) => {
  return <div className="flex justify-center mt-16">{children}</div>;
};
export default BodyBox;
