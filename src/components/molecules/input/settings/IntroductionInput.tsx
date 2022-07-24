import { useFormContext } from "react-hook-form";

import SettingInput from "@Components/atom/input/SettingInput";
import Desc from "@Components/atom/text/Desc";
import Title from "@Components/atom/text/Title";
import InputSettingsBox from "@Components/molecules/input/settings/InputSettingsBox";
import { introMsgRules } from "@Components/organisms/form/settings/rules";
import { INTRO_MSG_DESC } from "@Constants/text/desc";
import { INTRO_MSG_TITLE } from "@Constants/text/title";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const IntroductionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <InputSettingsBox>
      <div className="max-w-96">
        <Title className="text-4xl">{INTRO_MSG_TITLE.ko}</Title>
        <Desc className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {INTRO_MSG_DESC.ko}
        </Desc>
      </div>
      <SettingInput
        register={register}
        type="INTRO_MSG"
        rules={introMsgRules("ko")}
        error={errors.INTRO_MSG?.message}
      />
    </InputSettingsBox>
  );
};
export default IntroductionInput;
