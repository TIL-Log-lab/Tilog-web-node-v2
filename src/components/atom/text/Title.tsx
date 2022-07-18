import { TitleProps } from "@Components/atom/text/interface";

const Title = ({ TitleStyle, children }: TitleProps) => (
  <h1
    className={`${TitleStyle} text-neutral-800 dark:text-neutral-50 text-xl my-1 font-extrabold font-eng-sub-font-1`}
  >
    {children}
  </h1>
);
export default Title;
