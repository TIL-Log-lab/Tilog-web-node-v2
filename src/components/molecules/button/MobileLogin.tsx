import MTechRender from "@Molecules/Icon/TechRender";

const MButtonMobileLogin = () => {
  const handleLogin = async () => {
    window.open("http://localhost/auth/github/login");
  };
  return (
    <button
      onClick={handleLogin}
      className={`text-white rounded bg-black w-fit h-12`}
    >
      <div className="flex flex-row items-center justify-center p-3 ">
        <div className="text-2xl">
          <MTechRender categoryName="Github" />
        </div>
      </div>
    </button>
  );
};
export default MButtonMobileLogin;
