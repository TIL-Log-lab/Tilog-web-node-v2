import { HYDRATE } from "next-redux-wrapper";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { State } from "@Redux/interfaces/redux.interface";
import { CountryUnionType } from "@Messages/constants/country/interfaces";

export interface UserInfoSliceState {
  name: GetMeResponseDto["name"];
  avatar: GetMeResponseDto["avatar"];
  createdAt: GetMeResponseDto["createdAt"];
  language: CountryUnionType;
  isLogin: boolean;
  settings: GetMeResponseDto["settings"];
}

const internalInitialState: UserInfoSliceState = {
  name: "",
  avatar: "",
  createdAt: "",
  language: "ko",
  isLogin: false,
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
      ...payload["TILog_Info"],
    }),
  },
});
export const languageSelector = createSelector(
  (state: State) => state[userInfoSlice.name].language,
  (language) => language
);
