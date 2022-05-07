interface MButtonLogoutProps {
  handleLogout: () => void;
}
const MButtonLogout = ({ handleLogout }: MButtonLogoutProps) => (
  <button onClick={handleLogout}>로그아웃</button>
);
export default MButtonLogout;
