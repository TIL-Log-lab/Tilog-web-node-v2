interface EmailProps {
  className: string;
  children: string;
}
const Email = ({ className, children }: EmailProps) => (
  <p className={`${className}`}>{children}</p>
);
export default Email;
