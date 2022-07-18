import { TitleProps } from "@Components/atom/text/interface";

const Title = ({ TitleStyle, children }: TitleProps) => (
  <h1
    className={`${TitleStyle} text-neutral-800 text-5xl font-extrabold font-eng-sub-font-1`}
  >
    {children}
  </h1>
);
export default Title;
