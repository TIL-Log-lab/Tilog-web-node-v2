import { FormProvider, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import SummitInput from "@Components/atom/input/SummitInput";
import {
  DisplayNameInput,
  EmailInput,
  IntroductionInput,
  PositionInput,
} from "@Components/molecules/input/settings";
import useSettingForm from "@Components/organisms/form/settings/hooks/useSettingForm";
import SUMMIT from "@Constants/text/summit";
import useSetUserSetting from "@Hooks/react-query/userSetting/useUserSetting";
import SAVE_MESSAGE from "@Library/messages/constants/success/save";

import { SetSettingRequestBodyDtoSettingTypeEnum } from "@til-log.lab/tilog-api";

import GetMeResponseTransFormSettingsDto from "@Library/api/users/interface/getMeResponseTransFormSettingsDto";
import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const UserSettings = ({
  userInfo,
}: {
  userInfo: GetMeResponseTransFormSettingsDto;
}) => {
  const method = useSettingForm(userInfo.settings);
  const { mutate } = useSetUserSetting();
  // NOTE: 설정 제출 이벤트
  const onSubmit: SubmitHandler<UserSettingTypes> = async (object) => {
    const loading = toast.loading("로딩중...");
    Object.keys(object).forEach((key) => {
      const userSettingKey = key as SetSettingRequestBodyDtoSettingTypeEnum;
      mutate(
        {
          content: object[userSettingKey],
          settingType: userSettingKey,
        },
        {
          onError: (e) => {
            toast.error(e.message.ko, {
              id: loading,
            });
          },
          onSuccess: () => {
            toast.success(SAVE_MESSAGE.ko, {
              id: loading,
            });
          },
        }
      );
    });
  };
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
        <SummitInput value={SUMMIT.ko} />
      </form>
    </FormProvider>
  );
};
export default UserSettings;
