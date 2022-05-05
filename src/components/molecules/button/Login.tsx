import axios from "axios";

import OTechIcons from "src/components/organisms/techIcons";

const MButtonLogin = () => {
  const handleLogin = async () => {
    const loginWindow = window.open("http://localhost/auth/github/login");
    if (!loginWindow) {
      return alert("window open error");
    }
    const loginCheck = setInterval(async () => {
      if (loginWindow.closed) {
        clearInterval(loginCheck);
      }
      try {
        await axios.get("http://localhost:3000/api/userinfo");
        loginWindow.close();
        window.location.reload();
      } catch (error) {
        if (axios.isAxiosError(error)) alert(error.message);
      }
    }, 1000);
  };
  return (
    <button
      onClick={handleLogin}
      className={`text-white rounded bg-black w-fit h-12`}
    >
      <div className="flex flex-row items-center justify-center p-3 ">
        Login With Github
        <div className="ml-3 text-2xl">
          <OTechIcons categoryName="Github" />
        </div>
      </div>
    </button>
  );
};
export default MButtonLogin;
