import { configureStore } from "@reduxjs/toolkit";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";

import { userInfoSlice } from "@Redux/userInfo";

export const store = configureStore({
  reducer: {
    [userInfoSlice.name]: userInfoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      nextReduxCookieMiddleware({
        subtrees: [`${userInfoSlice.name}`],
      })
    ),
});
const makeStore = wrapMakeStore(() => store);

export type UserInfoStore = ReturnType<typeof makeStore>;
export type UserInfoState = ReturnType<UserInfoStore["getState"]>;
export type UserInfoDispatch = UserInfoStore["dispatch"];

export const wrapper = createWrapper(makeStore, { debug: true });
