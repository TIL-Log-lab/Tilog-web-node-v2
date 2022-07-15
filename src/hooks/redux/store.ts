import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";

import { TILOG_INFO_COOKIE } from "@Constants/environment";
import { userInfoSlice } from "@Redux/userInfo";
import { configureStore } from "@reduxjs/toolkit";

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
export const makeStore = wrapMakeStore(() => store);

export const wrapper = createWrapper(makeStore, { debug: true });
