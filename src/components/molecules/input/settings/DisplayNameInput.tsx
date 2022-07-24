import { useFormContext } from "react-hook-form";

import SettingInput from "@Components/atom/input/SettingInput";
import Desc from "@Components/atom/text/Desc";
import Title from "@Components/atom/text/Title";
import { displayNameRules } from "@Components/molecules/input/rules/index";
import InputSettingsBox from "@Components/molecules/input/settings/InputSettingsBox";
import { DISPLAY_NAME_DESC } from "@Constants/text/desc";
import { DISPLAY_NAME_TITLE } from "@Constants/text/title";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const DisplayNameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <InputSettingsBox>
      <div className="max-w-96">
        <Title className="text-4xl">{DISPLAY_NAME_TITLE.ko}</Title>
        <Desc className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {DISPLAY_NAME_DESC.ko}
        </Desc>
      </div>
      <SettingInput
        register={register}
        type="DISPLAY_NAME"
        rules={displayNameRules("ko")}
        error={errors.DISPLAY_NAME?.message}
      />
    </InputSettingsBox>
  );
};
export default DisplayNameInput;
