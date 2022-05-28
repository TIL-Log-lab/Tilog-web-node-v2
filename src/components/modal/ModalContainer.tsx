import { useSelector } from "react-redux";

import { modalSelector } from "@Redux/modal";
import MODAL_NAME from "@Redux/constants/modalName";
import ModalNameUnion from "@Redux/interfaces/modal.interface";

const ModalContainer = () => {
  const modalName = useSelector(modalSelector);
  if (modalName in MODAL_NAME) {
    const newModalName = modalName as ModalNameUnion;
    return MODAL_NAME[newModalName];
  }
  return <></>;
};
export default ModalContainer;
