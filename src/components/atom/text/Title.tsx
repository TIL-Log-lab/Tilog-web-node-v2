interface TitleProps {
  className: string;
  children: string;
}

const Title = ({ className, children }: TitleProps) => (
  <h1 className={`${className}`}>{children}</h1>
);
export default Title;
