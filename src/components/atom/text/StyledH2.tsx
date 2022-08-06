import { HTMLAttributes } from "react";

interface StyledH2Props extends HTMLAttributes<HTMLHeadingElement> {}

const StyledH2 = ({ children, className, ...props }: StyledH2Props) => {
  return (
    <h2
      {...props}
      className={`${className} text-3xl font-extrabold md:text-5xl text-neutral-800 dark:text-neutral-50 font-eng-sub-font-2`}
    >
      {children}
    </h2>
  );
};

export default StyledH2;
