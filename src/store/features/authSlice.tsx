import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  user?: any;
  accessToken?: string | null;
  refreshToken?: string | null;
  locationName?: string | null;
  location: {
    name?: string;
    latitude?: number;
    longitude?: number;
    type?: 'city' | 'area';
  };
  cartTotalPrice?: number;
  headerEmptyBtn?: boolean;
  fcmToken?: string | null;
  showWelcome?: boolean;
  language?: string;
}

const initialState: AuthState = {
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  locationName: undefined,
  location: {},
  cartTotalPrice: 0,
  headerEmptyBtn: false,
  fcmToken: undefined,
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
      state.locationName = null;
      state.location = {};
      state.cartTotalPrice = 0;
      state.headerEmptyBtn = false;
      state.fcmToken = null;
    },
    updateValidation: (state, action) => {
      if (state.user) state.user.hasVerifiedEmail = action.payload;
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
    updateName: (state, action: {payload: {name: string}}) => {
      // @ts-ignore
      if (state.user?.name) state.user.name = action.payload.name;
    },
    storeLocationData: (state, action: {payload: string | any}) => {
      if (action.payload) {
        state.locationName = action.payload;
      }
    },
    setCartTotalPrice: (state, action: {payload: string | any}) => {
      if (action.payload) {
        state.cartTotalPrice = action.payload;
      }
    },
    setHeaderEmptyBtn: (state, action: {payload: string | any}) => {
      if (action.payload) {
        state.cartTotalPrice = action.payload;
      }
    },
    setLocationData: (
      state: any,
      action: {
        payload: {
          name: string;
          latitude: string;
          longitude: string;
          type: 'city' | 'area';
          city?: string;
        };
      },
    ) => {
      if (action.payload) {
        state.location['name'] = action.payload.name;
        state.location['latitude'] = action.payload.latitude;
        state.location['longitude'] = action.payload.longitude;
        state.location['type'] = action.payload.type;
        state.location['city'] = action.payload.city;
      }
    },
    setFcmToken: (state, action: {payload: string}) => {
      if (action.payload) {
        state.fcmToken = action.payload;
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
  updateValidation,
  updateToken,
  updateName,
  storeLocationData,
  setCartTotalPrice,
  setLocationData,
  setHeaderEmptyBtn,
  setFcmToken,
  setShowWelcome,
  setLanguage,
} = authSlice.actions;

export const selectAuth = (state: {auth: AuthState}) => state.auth;
export const selectUser = (state: {auth: AuthState}) => state.auth.user;
export const selectAccessToken = (state: {auth: AuthState}) =>
  state.auth.accessToken;
export const selectRefreshToken = (state: {auth: AuthState}) =>
  state.auth.refreshToken;
export const selectLocation = (state: {auth: AuthState}) => state.auth.location;
export const selectCartTotalPrice = (state: {auth: AuthState}) =>
  state?.auth?.cartTotalPrice;
export const selectedHeaderEmptyBtn = (state: {auth: AuthState}) =>
  state?.auth?.headerEmptyBtn;
export const selectFcmToken = (state: {auth: AuthState}) =>
  state?.auth?.fcmToken;
export const selectShowWelcome = (state: {auth: AuthState}) =>
  state?.auth?.showWelcome;
export const selectLanguage = (state: {auth: AuthState}) =>
  state?.auth?.language;

const authReducer = authSlice.reducer;

export default authReducer;
