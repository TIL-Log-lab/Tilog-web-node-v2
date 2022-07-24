interface DescProps {
  className: string;
  children: string;
}

const Desc = ({ className, children }: DescProps) => (
  <p className={`${className}`}>{children}</p>
);
export default Desc;
