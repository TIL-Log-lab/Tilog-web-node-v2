import OTechIcons from "@Organisms/techIcons";
interface MButtonLoginProps {
  handleLogin: () => void;
}

const MButtonLogin = ({ handleLogin }: MButtonLoginProps) => (
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
export default MButtonLogin;
