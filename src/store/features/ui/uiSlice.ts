import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type initialStateType = {
  hasViewedOnboarding: boolean;
};

const initialState: initialStateType = {
  hasViewedOnboarding: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setHasViewedOnboarding: (state, action: PayloadAction<boolean>) => {
      state.hasViewedOnboarding = action.payload;
    },
  },
});

export const {setHasViewedOnboarding} = uiSlice.actions;

export const selectHasViewedOnboarding = (state: {ui: initialStateType}) =>
  state.ui.hasViewedOnboarding;

const uiReducer = uiSlice.reducer;

export default uiReducer;
