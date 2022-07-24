interface DisplayNameProps {
  className: string;
  children: string;
}
const DisplayName = ({ className, children }: DisplayNameProps) => (
  <h3 className={`${className}`}>{children}</h3>
);
export default DisplayName;
