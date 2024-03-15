import {API_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '..';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, api) => {
    const state: any = api?.getState?.() as RootState;
    if (state?.auth?.accessToken) {
      headers.set('authorization', `Bearer ${state?.auth?.accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (
  args: any,
  api: any,
  extraOptions: any,
): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);
  const status = result?.meta?.response?.status;
  const unauthorizedStatuses = [401];
  if (status && unauthorizedStatuses.includes(status)) {
    api.dispatch(logout());
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: [
    'ProfileUpdate',
    'ExerciseAdd',
    'Chats',
    'AddWorkout',
    'AddProgram',
    'WorkoutPerWeek',
    'checklist',
  ],
  endpoints: () => ({}),
});

export default apiSlice.reducer;
