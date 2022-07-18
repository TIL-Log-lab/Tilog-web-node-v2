import { SubTitleProps } from "@Components/atom/text/interface";

const SubTitle = ({ SubTitleStyle, children }: SubTitleProps) => (
  <h3
    className={`${SubTitleStyle} text-neutral-500 text-xl font-medium font-eng-sub-font-2`}
  >
    {children}
  </h3>
);
export default SubTitle;
