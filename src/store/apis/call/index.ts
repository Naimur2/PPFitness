import {
  GetV1CallStartParameterTo,
  GetV1CallStartSuccessfulResponse,
  PostV1CallDeclineRequestBody,
  PostV1CallDeclineSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getStartCall: builder.query<
      GetV1CallStartSuccessfulResponse,
      GetV1CallStartParameterTo
    >({
      query: props => ({
        url: `call/start${props}`,
      }),
    }),
    endCall: builder.mutation<
      PostV1CallDeclineSuccessfulResponse,
      PostV1CallDeclineRequestBody
    >({
      query: props => ({
        url: `call/declien`,
        method: 'POST',
        body: props,
      }),
      invalidatesTags: ['Chats'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyGetStartCallQuery,
  useGetStartCallQuery,
  useEndCallMutation,
} = authApiSlice;
