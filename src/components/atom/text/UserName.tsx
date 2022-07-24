interface UserNameProp {
  children: string;
  className?: string;
}
const UserName = ({ className, children }: UserNameProp) => (
  <span className={`${className}`}>{children}</span>
);

export default UserName;
