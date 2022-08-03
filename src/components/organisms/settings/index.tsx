import { FormProvider, useForm } from "react-hook-form";

import SaveSettingSubmitButton from "@Components/molecules/buttons/SaveSettingSubmitButton";
import useSubmit from "@Components/organisms/settings/hooks/useSubmit";
import DisplayNameInput from "@Components/organisms/settings/input/DisplayNameInput";
import EmailInput from "@Components/organisms/settings/input/EmailInput";
import IntroductionInput from "@Components/organisms/settings/input/IntroductionInput";
import PositionInput from "@Components/organisms/settings/input/PositionInput";

import GetMeResponseTransFormSettingsDto from "@Library/api/users/interface/getMeResponseTransFormSettingsDto";
import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const Settings = ({
  userInfo,
}: {
  userInfo: GetMeResponseTransFormSettingsDto;
}) => {
  const method = useForm<UserSettingTypes>({
    defaultValues: userInfo.settings,
  });
  const onSubmit = useSubmit();
  return (
    <FormProvider {...method}>
      <form
        className="relative borer p-14 bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        <DisplayNameInput />
        <EmailInput />
        <IntroductionInput />
        <PositionInput />
        <SaveSettingSubmitButton />
      </form>
    </FormProvider>
  );
};
export default Settings;
