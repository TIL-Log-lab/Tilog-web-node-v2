interface CountProps {
  className: string;
  children: number;
}

const Count = ({ className, children }: CountProps) => (
  <span className={className}>{children}</span>
);
export default Count;
