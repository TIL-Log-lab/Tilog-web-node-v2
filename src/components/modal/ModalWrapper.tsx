import React, { useCallback, useEffect, useRef } from "react";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";

import { modalSlice } from "@Redux/modal";
import MButtonCancel from "@Molecules/button/Cancel";

const ModalWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleDownESC = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === "Escape") dispatch(modalSlice.actions.resetModal());
    },
    [dispatch]
  );

  const handleClickOutside = useCallback(
    ({ target }: MouseEvent) => {
      if (modalRef.current == target) dispatch(modalSlice.actions.resetModal());
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleDownESC);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleDownESC);
    };
  }, [handleClickOutside, handleDownESC]);

  return (
    <div
      ref={modalRef}
      className="absolute flex items-center justify-center w-full h-full  animate-enter wall bg-black/50 border-x-neutral-700"
    >
      <div className="flex flex-row-reverse animate-bounce">
        <button
          className="absolute p-3 text-gray-400 w-fit h-fit hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          onClick={() => dispatch(modalSlice.actions.resetModal())}
        >
          <MButtonCancel />
        </button>
        {children}
      </div>
    </div>
  );
};

export default React.memo(ModalWrapper);
