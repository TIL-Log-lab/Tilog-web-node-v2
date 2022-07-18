import UserNameProp from "@Components/atom/user/interface/userNameProp";

const UserName = ({ userNameStyle, children }: UserNameProp) => (
  <span
    className={`ml-3 text-xl font-semibold text-neutral-600 dark:text-neutral-50 font-eng-sub-font-1 ${userNameStyle}`}
  >
    {children}
  </span>
);

export default UserName;
