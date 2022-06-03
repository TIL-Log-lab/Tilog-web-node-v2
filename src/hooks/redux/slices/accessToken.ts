import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export interface AccessTokenSliceState {
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"] | null;
}

const internalInitialState: AccessTokenSliceState = {
  accessToken: null,
};

export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: internalInitialState,

  reducers: {
    changeToken(state, { payload }: PayloadAction<AccessTokenSliceState>) {
      Object.assign(state, payload);
    },
    resetToken(state) {
      Object.assign(state, internalInitialState);
    },
  },
});
