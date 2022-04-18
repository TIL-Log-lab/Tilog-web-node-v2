const MButtonLogin = () => {
  const handleLogin = async () => {
    window.open("http://localhost/auth/github/login");
  };
  return (
    <button onClick={handleLogin} className={`rounded bg-black w-72 h-12`}>
      <p className="text-sm text-white">Login With Github</p>
    </button>
  );
};
export default MButtonLogin;
