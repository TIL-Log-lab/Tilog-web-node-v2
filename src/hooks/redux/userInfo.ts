import { HYDRATE } from "next-redux-wrapper";

import { LanguageUnionType } from "@Library/language/language";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";

import { State } from "@Redux/interface/redux";

export interface UserInfoSliceState {
  userId: GetMeResponseDto["userId"];
  name: GetMeResponseDto["name"];
  avatar: GetMeResponseDto["avatar"];
  createdAt: GetMeResponseDto["createdAt"];
  isLogin: boolean;
  language: LanguageUnionType;
  settings: GetMeResponseDto["settings"];
}

const internalInitialState: UserInfoSliceState = {
  userId: 0,
  name: "",
  avatar: "",
  createdAt: "",
  isLogin: false,
  language: "ko",
  settings: [],
};

export const userInfoSlice = createSlice({
  name: "TILog_Info",
  initialState: internalInitialState,

  reducers: {
    changeUserInfo(state, { payload }: PayloadAction<UserInfoSliceState>) {
      Object.assign(state, payload);
    },
    resetUserInfo(state) {
      Object.assign(state, internalInitialState);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => ({
      ...state,
      ...payload.TILog_Info,
    }),
  },
});
export const languageSelector = createSelector(
  (state: State) => state[userInfoSlice.name].language,
  (language) => language
);

export const userInfoSelector = createSelector(
  (state: State) => state[userInfoSlice.name],
  (userInfo) => userInfo
);
