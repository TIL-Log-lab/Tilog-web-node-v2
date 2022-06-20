import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  GetMeResponseDto,
  SetSettingRequestBodyDtoSettingTypeEnum,
} from "@til-log.lab/tilog-api";
import { UserSettingTypes } from "@Organisms/user-settings/interface";
import ExceptionInterface from "@Api/errors/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector, userInfoSlice } from "@Redux/userInfo";
import clientSideAuthentication from "@Auth/clientSideAuthentication";
import { modalSlice } from "@Redux/modal";
import React from "react";
import { getMe, setSetting } from "@Api/adapter";
import SettingInput from "@Organisms/user-settings/SettingInput";

const OUserSetting = () => {
  const { settings } = useSelector(userInfoSelector);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSettingTypes>({
    defaultValues: getUserSettings(settings),
  });

  // NOTE: 설정 제출 이벤트
  const onSubmit: SubmitHandler<UserSettingTypes> = async (object) => {
    const loading = toast.loading("로딩중...");
    try {
      // NOTE: 유저 설정을 저장
      await Promise.all([
        ...Object.keys(object).map((key) => {
          const TKey = key as SetSettingRequestBodyDtoSettingTypeEnum;
          return clientSideAuthentication(() =>
            setSetting({
              content: object[TKey],
              settingType: TKey,
            })
          );
        }),
      ]);

      // NOTE: 새로운 유저 정보를 가져옴
      const { data } = await clientSideAuthentication(() => getMe());

      // NOTE: 유저 정보를 Redux와 동기화
      if (data) {
        dispatch(userInfoSlice.actions.changeUserSetting(data.settings));
        toast.success("저장 성공!", {
          id: loading,
        });
      }
    } catch (e) {
      const error = e as ExceptionInterface;
      if (error.statusCode === 401) {
        dispatch(modalSlice.actions.setModal({ modalName: "LOGIN" }));
      }

      toast.error(error.message.en, {
        id: loading,
      });
    }
  };
  return (
    <form
      className="grid w-full max-w-2xl gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SettingInput
        register={register}
        type={SetSettingRequestBodyDtoSettingTypeEnum["DisplayName"]}
        rules={{
          minLength: {
            value: 2,
            message: "최소2자로 제한되어 있습니다.",
          },
          maxLength: {
            value: 190,
            message: "최대190자로 제한되어 있습니다.",
          },
        }}
        title={"닉네임"}
        subTitle={"닉네임을 설정하세요."}
        errors={errors}
      />
      <SettingInput
        register={register}
        type={SetSettingRequestBodyDtoSettingTypeEnum["Email"]}
        rules={{
          pattern: {
            value:
              /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
            message: "잘못된 이메일 형식입니다.",
          },
          maxLength: {
            value: 190,
            message: "최대190자로 제한되어 있습니다.",
          },
        }}
        title={"이메일"}
        subTitle={"이메일을 설정하세요."}
        errors={errors}
      />
      <SettingInput
        register={register}
        type={SetSettingRequestBodyDtoSettingTypeEnum["IntroMsg"]}
        rules={{
          minLength: {
            value: 10,
            message: "최소10자로 제한되어 있습니다.",
          },
          maxLength: {
            value: 190,
            message: "최대190자로 제한되어 있습니다.",
          },
        }}
        title={"개인소개"}
        subTitle={"개인소개를 설정하세요."}
        errors={errors}
      />
      <SettingInput
        register={register}
        type={SetSettingRequestBodyDtoSettingTypeEnum["Position"]}
        rules={{
          minLength: {
            value: 10,
            message: "최소10자로 제한되어 있습니다.",
          },
          maxLength: {
            value: 190,
            message: "최대190자로 제한되어 있습니다.",
          },
        }}
        title={"포지션"}
        subTitle={"포지션을 설정하세요."}
        errors={errors}
      />
      <input
        type="submit"
        value="수정"
        className="w-20 h-10 text-white bg-black rounded-md cursor-pointer "
      />
    </form>
  );
};
export default OUserSetting;

// TODO: Refactoring
function getUserSettings(
  settings: GetMeResponseDto["settings"] | undefined
): UserSettingTypes {
  if (settings) {
    return settings.reduce(
      (prevSettings, curSettings) => {
        return {
          ...prevSettings,
          [curSettings.type]: curSettings.content,
        };
      },
      { DISPLAY_NAME: null, INTRO_MSG: null, EMAIL: null, POSITION: null }
    );
  }
  return {
    DISPLAY_NAME: null,
    INTRO_MSG: null,
    EMAIL: null,
    POSITION: null,
  };
}
