import useLogout from "@Components/molecules/button/hooks/useLogout";
import LOGOUT from "@Constants/text/logout";

const LogoutButton = () => {
  const handleLogout = useLogout();
  return (
    <button type="button" onClick={handleLogout}>
      <span className="block px-4 py-2 text-lg text-gray-700 cursor-pointer hover:underline font-eng-sub-font-1">
        {LOGOUT.ko}
      </span>
    </button>
  );
};
export default LogoutButton;
