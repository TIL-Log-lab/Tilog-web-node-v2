import type { NextPage } from "next";
import { useEffect } from "react";

const Callback: NextPage = () => {
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage("login");
      window.close();
    }
  }, []);
  return <div>로그인이 완료되었습니다! 잠시후 이창은 닫힘니다.</div>;
};
export default Callback;
