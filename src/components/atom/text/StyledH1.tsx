import { HTMLAttributes } from "react";

interface StyledH1Props extends HTMLAttributes<HTMLHeadingElement> {}

const StyledH1 = ({ children, className, ...props }: StyledH1Props) => {
  return (
    <h1
      {...props}
      className={`${className} text-4xl font-black md:text-6xl text-neutral-800 dark:text-neutral-50 font-eng-sub-font-2`}
    >
      {children}
    </h1>
  );
};

export default StyledH1;
