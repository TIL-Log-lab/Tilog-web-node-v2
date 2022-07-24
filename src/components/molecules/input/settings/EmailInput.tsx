import { useFormContext } from "react-hook-form";

import TextInput from "@Components/atom/input/TextInput";
import Desc from "@Components/atom/text/Desc";
import Title from "@Components/atom/text/Title";
import { emailRules } from "@Components/molecules/input/rules/index";
import { EMAIL_DESC } from "@Constants/text/desc";
import { EMAIL_TITLE } from "@Constants/text/title";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();

  const errorMessage = !errors.EMAIL ? "" : errors.EMAIL.message;

  return (
    <div>
      <div className="max-w-96">
        <Title className="text-4xl">{EMAIL_TITLE.ko}</Title>
        <Desc className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {EMAIL_DESC.ko}
        </Desc>
      </div>

      <TextInput
        register={register}
        rules={emailRules("ko")}
        inputName="EMAIL"
        errorMessage={errorMessage}
      />
    </div>
  );
};
export default EmailInput;
