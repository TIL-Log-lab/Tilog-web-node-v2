interface SubTitleProps {
  className: string;
  children: string;
}

const SubTitle = ({ className, children }: SubTitleProps) => (
  <h3 className={className}>{children}</h3>
);
export default SubTitle;
