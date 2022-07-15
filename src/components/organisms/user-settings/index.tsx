import React from "react";

import { SubmitHandler, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import SettingInput from "@Components/molecules/input/SettingInput";
import useSettingForm from "@Components/organisms/user-settings/hooks/useSettingForm";
import { UserSettingTypes } from "@Components/organisms/user-settings/interface";
import {
  displayNameRules,
  emailRules,
  introMsgRules,
  positionRules,
} from "@Components/organisms/user-settings/rules";
import {
  DISPLAY_NAME_DESC,
  EMAIL_DESC,
  INTRO_MSG_DESC,
  POSITION_DESC,
} from "@Constants/text/desc";
import SUMMIT from "@Constants/text/summit";
import {
  DISPLAY_NAME_TITLE,
  EMAIL_TITLE,
  INTRO_MSG_TITLE,
  POSITION_TITLE,
} from "@Constants/text/title";
import api from "@Library/api";
import ExceptionInterface from "@Library/api/exception/interface";
import SAVE_MESSAGE from "@Library/messages/constants/success/save";
import {
  languageSelector,
  userInfoSlice,
  userSettingSelector,
} from "@Redux/userInfo";

import { SetSettingRequestBodyDtoSettingTypeEnum } from "@til-log.lab/tilog-api";

const UserSettings = () => {
  const settings = useSelector(userSettingSelector);
  const language = useSelector(languageSelector);
  const method = useSettingForm(settings);
  const dispatch = useDispatch();
  // NOTE: 설정 제출 이벤트
  const onSubmit: SubmitHandler<UserSettingTypes> = async (object) => {
    const loading = toast.loading("로딩중...");
    try {
      // NOTE: 유저 설정을 저장
      await Promise.all([
        ...Object.keys(object).map((key) => {
          const TKey = key as SetSettingRequestBodyDtoSettingTypeEnum;
          return api.usersService.setSetting(object[TKey], TKey);
        }),
      ]);

      const { data } = await api.usersService.getMe();
      // NOTE: 유저 정보를 Redux와 동기화
      if (data) {
        dispatch(
          userInfoSlice.actions.changeUserInfo({
            ...data,
            isLogin: true,
            language,
          })
        );
        toast.success(SAVE_MESSAGE[language], {
          id: loading,
        });
      }
    } catch (e) {
      const error = e as ExceptionInterface;

      toast.error(error.message[language], {
        id: loading,
      });
    }
  };

  return (
    <FormProvider {...method}>
      <form
        className="grid w-full max-w-2xl gap-4"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        <SettingInput
          title={DISPLAY_NAME_TITLE[language]}
          desc={DISPLAY_NAME_DESC[language]}
          settingType={SetSettingRequestBodyDtoSettingTypeEnum.DisplayName}
          rules={displayNameRules(language)}
        />
        <SettingInput
          title={EMAIL_TITLE[language]}
          desc={EMAIL_DESC[language]}
          settingType={SetSettingRequestBodyDtoSettingTypeEnum.Email}
          rules={emailRules(language)}
        />
        <SettingInput
          title={INTRO_MSG_TITLE[language]}
          desc={INTRO_MSG_DESC[language]}
          settingType={SetSettingRequestBodyDtoSettingTypeEnum.IntroMsg}
          rules={introMsgRules(language)}
        />
        <SettingInput
          title={POSITION_TITLE[language]}
          desc={POSITION_DESC[language]}
          settingType={SetSettingRequestBodyDtoSettingTypeEnum.Position}
          rules={positionRules(language)}
        />
        <input
          type="submit"
          value={SUMMIT[language]}
          className="w-20 h-10 text-white bg-black rounded-md cursor-pointer "
        />
      </form>
    </FormProvider>
  );
};
export default UserSettings;
