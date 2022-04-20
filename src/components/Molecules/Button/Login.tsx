import MTechRender from "@Molecules/Icon/TechRender";

const MButtonLogin = () => {
  const handleLogin = async () => {
    window.open("http://localhost/auth/github/login");
  };
  return (
    <button
      onClick={handleLogin}
      className={`text-white rounded bg-black w-60 h-12`}
    >
      <div className="flex flex-row items-center justify-center p-3 ">
        Login With Github
        <div className="ml-3 text-2xl">
          <MTechRender categoryName="Github" />
        </div>
      </div>
    </button>
  );
};
export default MButtonLogin;
