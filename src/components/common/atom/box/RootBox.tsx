import { HTMLAttributes } from "react";

interface RootBoxProps extends HTMLAttributes<HTMLDivElement> {}

const RootBox = ({ children, ...props }: RootBoxProps) => (
  <div {...props} className="m-auto max-w-[1280px] items-center mt-20 px-5">
    {children}
  </div>
);

export default RootBox;
