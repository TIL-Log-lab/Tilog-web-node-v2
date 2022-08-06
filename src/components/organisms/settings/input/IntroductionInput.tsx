import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Components/atom/input/UnderLineTextInput";
import { introMsgRules } from "@Components/organisms/settings/input/rules";
import {
  INTRO_MSG,
  INTRO_MSG_DESC,
  INTRO_MSG_TITLE,
} from "@Constants/text/settings";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const IntroductionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div className="flex flex-col max-w-lg gap-7">
      <div className="max-w-96">
        <h1 className="text-4xl">{INTRO_MSG_TITLE.ko}</h1>
        <h3 className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {INTRO_MSG_DESC.ko}
        </h3>
      </div>
      <UnderLineTextInput
        register={register}
        type={INTRO_MSG}
        rules={introMsgRules("ko")}
        error={errors.INTRO_MSG?.message}
      />
    </div>
  );
};
export default IntroductionInput;
