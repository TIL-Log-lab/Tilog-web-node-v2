import { makeStore } from "@Redux/store";

export type UserInfoStore = ReturnType<typeof makeStore>;
export type UserInfoState = ReturnType<UserInfoStore["getState"]>;
export type UserInfoDispatch = UserInfoStore["dispatch"];
