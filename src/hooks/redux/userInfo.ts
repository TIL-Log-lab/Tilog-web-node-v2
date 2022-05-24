import { HYDRATE } from "next-redux-wrapper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";

export interface userInfoSliceState {
  name: GetMeResponseDto["name"];
  avatar: GetMeResponseDto["avatar"];
  createdAt: GetMeResponseDto["createdAt"];
  settings: GetMeResponseDto["settings"];
}

const internalInitialState: userInfoSliceState = {
  name: "",
  avatar: "",
  createdAt: "",
  settings: [],
};
// export const login = createAsyncThunk()
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: internalInitialState,

  reducers: {
    change(state, { payload }: PayloadAction<userInfoSliceState>) {
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
