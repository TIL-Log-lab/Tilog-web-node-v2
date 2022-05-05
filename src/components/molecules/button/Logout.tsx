import axios from "axios";

const MButtonLogout = () => {
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/logout");
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) alert(error.message);
    }
  };
  return <button onClick={handleLogout}>로그아웃</button>;
};
export default MButtonLogout;
