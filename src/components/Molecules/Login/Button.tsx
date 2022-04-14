interface MLoginButtonProps {
  onClick?: () => void;
}

const MLoginButton = ({ onClick }: MLoginButtonProps) => {
  return (
    <button onClick={onClick} className={`rounded bg-black w-72 h-12`}>
      <p className="text-sm text-white">Login With Github</p>
    </button>
  );
};
export default MLoginButton;
