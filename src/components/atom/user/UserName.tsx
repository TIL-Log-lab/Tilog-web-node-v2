import UserNameProp from "@Components/atom/user/interface/userNameProp";

const UserName = ({ userNameStyle, children }: UserNameProp) => (
  <span
    className={`${userNameStyle} ml-3 text-xs mt-1 font-semibold text-neutral-600 dark:text-neutral-50 font-eng-sub-font-1 `}
  >
    {children}
  </span>
);

export default UserName;
