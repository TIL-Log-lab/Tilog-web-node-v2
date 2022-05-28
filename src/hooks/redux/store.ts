import { configureStore } from "@reduxjs/toolkit";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";

import { userInfoSlice } from "@Redux/userInfo";
import { TILOG_INFO_COOKIE } from "@Redux/constants/cookiesName";
import { modalSlice } from "@Redux/modal";

export const store = configureStore({
  reducer: {
    [modalSlice.name]: modalSlice.reducer,
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
