import {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const useOutsideClickListener = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = useCallback(
    ({ target }: BaseSyntheticEvent | MouseEvent) => {
      if (ref.current && !ref.current.contains(target)) {
        setIsOpen(false);
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
  return { ref, isOpen, setIsOpen };
};
export default useOutsideClickListener;
