import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  user?: any;
  accessToken?: string | null;
  refreshToken?: string | null;
  fcmToken?: string | null;
  fcmTokenId?: string | null;
  showWelcome?: boolean;
  language?: string;
}

const initialState: AuthState = {
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  fcmToken: undefined,
  fcmTokenId: undefined,
  showWelcome: true,
  language: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: {
        payload: {
          user: any;
          accessToken?: string;
          refreshToken?: string;
        };
      },
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: state => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
    updateToken: (
      state,
      action: {
        payload: {
          accessToken: string;
          refreshToken?: string;
        };
      },
    ) => {
      if (action.payload.accessToken)
        state.accessToken = action.payload.accessToken;
      if (action.payload.refreshToken)
        state.refreshToken = action.payload.refreshToken;
    },
    setProfile: (
      state,
      action: {
        payload: {
          avatar?: string;
          country?: string;
          fullName?: string;
          gender?: string;
          goal?: string;
          height?: string;
          phone?: string;
        };
      },
    ) => {
      if (action.payload)
        state.user = {
          avatar: action.payload?.avatar,
          country: action.payload?.country,
          fullName: action.payload?.fullName,
          gender: action.payload?.gender,
          goal: action.payload?.goal,
          height: action.payload?.height,
          phone: action.payload?.phone,
          ...state.user,
        };
    },
    setFcmToken: (state, action: {payload: string}) => {
      if (action.payload) {
        state.fcmToken = action.payload;
      }
    },
    setFcmTokenId: (state, action: {payload: string}) => {
      if (action.payload) {
        state.fcmTokenId = action.payload;
      }
    },
    setShowWelcome: (state, action: {payload: boolean}) => {
      state.showWelcome = action.payload;
    },
    setLanguage: (state, action: {payload: string}) => {
      state.language = action.payload;
    },
  },
});

export const {
  login,
  logout,
  updateToken,
  setFcmToken,
  setFcmTokenId,
  setShowWelcome,
  setLanguage,
  setProfile,
} = authSlice.actions;

export const selectAuth = (state: {auth: AuthState}) => state.auth;
export const selectUser = (state: {auth: AuthState}) => state.auth.user;
export const selectAccessToken = (state: {auth: AuthState}) =>
  state.auth.accessToken;
export const selectRefreshToken = (state: {auth: AuthState}) =>
  state.auth.refreshToken;
export const selectFcmToken = (state: {auth: AuthState}) =>
  state?.auth?.fcmToken;
export const selectFcmTokenId = (state: {auth: AuthState}) =>
  state?.auth?.fcmTokenId;
export const selectShowWelcome = (state: {auth: AuthState}) =>
  state?.auth?.showWelcome;
export const selectLanguage = (state: {auth: AuthState}) =>
  state?.auth?.language;

const authReducer = authSlice.reducer;

export default authReducer;
