/* eslint-disable jsx-a11y/label-has-associated-control */
import { ReactNode } from "react";

const InputSettingsBox = ({ children }: { children: ReactNode }) => {
  return <label className="flex flex-col max-w-lg gap-7">{children}</label>;
};
export default InputSettingsBox;
