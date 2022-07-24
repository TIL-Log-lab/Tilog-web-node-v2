import { useFormContext } from "react-hook-form";

import SettingInput from "@Components/atom/input/SettingInput";
import Desc from "@Components/atom/text/Desc";
import Title from "@Components/atom/text/Title";
import { emailRules } from "@Components/molecules/input/rules/index";
import InputSettingsBox from "@Components/molecules/input/settings/InputSettingsBox";
import { EMAIL_DESC } from "@Constants/text/desc";
import { EMAIL_TITLE } from "@Constants/text/title";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <InputSettingsBox>
      <div className="max-w-96">
        <Title className="text-4xl">{EMAIL_TITLE.ko}</Title>
        <Desc className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {EMAIL_DESC.ko}
        </Desc>
      </div>

      <SettingInput
        register={register}
        rules={emailRules("ko")}
        type="EMAIL"
        error={errors.EMAIL?.message}
      />
    </InputSettingsBox>
  );
};
export default EmailInput;
