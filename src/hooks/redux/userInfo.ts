import { HYDRATE } from "next-redux-wrapper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";

export interface userInfoStateInterface {
  name: GetMeResponseDto["name"];
  avatar: GetMeResponseDto["avatar"];
  createdAt: GetMeResponseDto["createdAt"];
  settings: GetMeResponseDto["settings"];
}

const internalInitialState: userInfoStateInterface = {
  name: "",
  avatar: "",
  createdAt: "",
  settings: [],
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: internalInitialState,

  reducers: {
    change(state, { payload }: PayloadAction<userInfoStateInterface>) {
      Object.assign(state, payload);
    },
    resetUserInfo(state) {
      Object.assign(state, internalInitialState);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => ({
      ...state,
      ...payload.userInfo,
    }),
  },
});
