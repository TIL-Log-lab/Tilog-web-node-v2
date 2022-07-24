import { useFormContext } from "react-hook-form";

import TextInput from "@Components/atom/input/TextInput";
import Desc from "@Components/atom/text/Desc";
import Title from "@Components/atom/text/Title";
import { introMsgRules } from "@Components/molecules/input/rules/index";
import { INTRO_MSG_DESC } from "@Constants/text/desc";
import { INTRO_MSG_TITLE } from "@Constants/text/title";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const IntroductionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();

  const errorMessage = !errors.INTRO_MSG ? "" : errors.INTRO_MSG.message;

  return (
    <div>
      <div className="max-w-96">
        <Title className="text-4xl">{INTRO_MSG_TITLE.ko}</Title>
        <Desc className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {INTRO_MSG_DESC.ko}
        </Desc>
      </div>

      <TextInput
        register={register}
        rules={introMsgRules("ko")}
        inputName="INTRO_MSG"
        errorMessage={errorMessage}
      />
    </div>
  );
};
export default IntroductionInput;
