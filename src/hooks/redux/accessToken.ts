import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export interface accessTokenSliceState {
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"];
}

const internalInitialState: accessTokenSliceState = {
  accessToken: "",
};

export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: internalInitialState,

  reducers: {
    changeToken(state, { payload }: PayloadAction<accessTokenSliceState>) {
      Object.assign(state, payload);
    },
    resetToken(state) {
      Object.assign(state, internalInitialState);
    },
  },
});
