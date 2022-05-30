import { useSelector } from "react-redux";

import { modalSelector } from "@Redux/modal";
import MODAL_NAME from "@Redux/constants/modalName";
import ModalWrapper from "@Modal/ModalWrapper";

const ModalContainer = () => {
  const modalName = useSelector(modalSelector);
  if (!modalName) return <></>;

  return <ModalWrapper>{MODAL_NAME[modalName]}</ModalWrapper>;
};
export default ModalContainer;
