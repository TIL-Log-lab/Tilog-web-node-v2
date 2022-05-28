import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import ModalNameUnion from "@Redux/interfaces/modal.interface";
import { State } from "@Redux/interfaces/redux.interface";

interface ModalSliceState {
  modalName: ModalNameUnion;
}
const internalInitialState: ModalSliceState = {
  modalName: "EMPTY",
};

export const modalSlice = createSlice({
  name: "Modal",
  initialState: internalInitialState,
  reducers: {
    setModal(state, { payload }: PayloadAction<ModalSliceState>) {
      Object.assign(state, payload);
    },
    resetModal(state) {
      Object.assign(state, internalInitialState);
    },
  },
});
export const modalSelector = createSelector(
  (state: State) => state[modalSlice.name].modalName,
  (modalName) => modalName
);
