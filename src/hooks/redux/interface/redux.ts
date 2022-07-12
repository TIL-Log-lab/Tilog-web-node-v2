import { makeStore } from "@Redux/store";

export type Store = ReturnType<typeof makeStore>;
export type State = ReturnType<Store["getState"]>;
export type Dispatch = Store["dispatch"];
