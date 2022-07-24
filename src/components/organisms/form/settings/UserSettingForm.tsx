import { FormProvider } from "react-hook-form";

import SummitButton from "@Components/atom/button/SummitButton";
import DisplayNameInput from "@Components/molecules/input/settings/DisplayNameInput";
import EmailInput from "@Components/molecules/input/settings/EmailInput";
import IntroductionInput from "@Components/molecules/input/settings/IntroductionInput";
import PositionInput from "@Components/molecules/input/settings/PositionInput";
import useHandleSummit from "@Components/organisms/form/settings/hooks/useHandleSummit";
import useSettingForm from "@Components/organisms/form/settings/hooks/useSettingForm";
import SUMMIT from "@Constants/text/summit";

import GetMeResponseTransFormSettingsDto from "@Library/api/users/interface/getMeResponseTransFormSettingsDto";

const UserSettingForm = ({
  userInfo,
}: {
  userInfo: GetMeResponseTransFormSettingsDto;
}) => {
  const method = useSettingForm(userInfo.settings);
  const handleSubmit = useHandleSummit();

  return (
    <FormProvider {...method}>
      <form
        className="flex flex-col gap-y-10 borer p-14 bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
        onSubmit={method.handleSubmit(handleSubmit)}
      >
        <DisplayNameInput />
        <EmailInput />
        <IntroductionInput />
        <PositionInput />
        <div className="text-right">
          <SummitButton text={SUMMIT.ko} />
        </div>
      </form>
    </FormProvider>
  );
};
export default UserSettingForm;
