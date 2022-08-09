import useLogout from "@Components/common/molecules/buttons/hooks/useLogout";

interface LogoutButtonProps {
  children: string;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const handleLogout = useLogout();
  return (
    <button type="button" onClick={handleLogout}>
      <span className="block px-4 py-2 text-lg text-gray-700 cursor-pointer hover:underline font-eng-sub-font-1">
        {children}
      </span>
    </button>
  );
};
export default LogoutButton;
