import {
  GetV1CallStartParameterTo,
  GetV1CallStartSuccessfulResponse,
  PostV1CallDeclineRequestBody,
  PostV1CallDeclineSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';
import queryString from 'query-string';

export const callApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getStartCall: builder.query<
      GetV1CallStartSuccessfulResponse,
      {
        to: GetV1CallStartParameterTo;
        type: 'video' | 'audio';
      }
    >({
      query: props => ({
        url: `call/start${queryString.stringify(props)}`,
      }),
    }),
    declineCall: builder.mutation<
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
  useDeclineCallMutation,
} = callApiSlice;
