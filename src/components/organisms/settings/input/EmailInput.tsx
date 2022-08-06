import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Components/atom/input/UnderLineTextInput";
import { emailRules } from "@Components/organisms/settings/input/rules";
import { EMAIL, EMAIL_DESC, EMAIL_TITLE } from "@Constants/text/settings";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div className="flex flex-col max-w-lg gap-7">
      <div className="max-w-96">
        <h1 className="text-4xl">{EMAIL_TITLE.ko}</h1>
        <h3 className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {EMAIL_DESC.ko}
        </h3>
      </div>
      <UnderLineTextInput
        register={register}
        type={EMAIL}
        rules={emailRules("ko")}
        error={errors.EMAIL?.message}
      />
    </div>
  );
};
export default EmailInput;
