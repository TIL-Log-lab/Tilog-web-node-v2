import React, {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import UserImage from "@Molecules/images/User";
import Dropdown from "@Organisms/Dropdown";

const Logout = () => {
  const logoutRef = useRef<HTMLDivElement>(null);
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);

  const handleClickOutside = useCallback(
    ({ target }: BaseSyntheticEvent | MouseEvent) => {
      if (logoutRef.current && !logoutRef.current.contains(target)) {
        setIsDropBoxOpen(false);
      }
    },
    []
  );
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <div ref={logoutRef} className="z-50">
      <div className="relative inline-block text-left">
        <UserImage onClick={() => setIsDropBoxOpen(!isDropBoxOpen)} />
        {isDropBoxOpen && <Dropdown />}
      </div>
    </div>
  );
};

export default Logout;
