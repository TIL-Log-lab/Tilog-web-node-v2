import { configureStore } from "@reduxjs/toolkit";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";

import { userInfoSlice } from "@Redux/userInfo";
import { TILOG_INFO_COOKIE } from "@Redux/constants/cookiesName";

export const store = configureStore({
  reducer: {
    [userInfoSlice.name]: userInfoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      nextReduxCookieMiddleware({
        subtrees: [TILOG_INFO_COOKIE],
      })
    ),
});
const makeStore = wrapMakeStore(() => store);

export type UserInfoStore = ReturnType<typeof makeStore>;
export type UserInfoState = ReturnType<UserInfoStore["getState"]>;
export type UserInfoDispatch = UserInfoStore["dispatch"];

export const wrapper = createWrapper(makeStore, { debug: true });
