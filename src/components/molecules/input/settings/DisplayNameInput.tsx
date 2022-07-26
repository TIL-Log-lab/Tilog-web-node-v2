import { useFormContext } from "react-hook-form";

import TextInput from "@Components/atom/input/TextInput";
import Desc from "@Components/atom/text/Desc";
import Title from "@Components/atom/text/Title";
import { displayNameRules } from "@Components/molecules/input/rules/index";
import { DISPLAY_NAME_DESC } from "@Constants/text/desc";
import { DISPLAY_NAME_TITLE } from "@Constants/text/title";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const DisplayNameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();

  const errorMessage = !errors.DISPLAY_NAME ? "" : errors.DISPLAY_NAME.message;

  return (
    <div>
      <div className="max-w-96">
        <Title className="text-4xl">{DISPLAY_NAME_TITLE.ko}</Title>
        <Desc className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {DISPLAY_NAME_DESC.ko}
        </Desc>
      </div>

      <TextInput
        register={register}
        rules={displayNameRules("ko")}
        inputName="DISPLAY_NAME"
        errorMessage={errorMessage}
      />
    </div>
  );
};
export default DisplayNameInput;
