import {
  PostV1AuthLoginRequestBody,
  PostV1AuthLoginSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';
import {login} from '@store/features/authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<
      PostV1AuthLoginSuccessfulResponse,
      PostV1AuthLoginRequestBody
    >({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data: result} = await queryFulfilled;

          if (result.data.data) {
            dispatch(
              login({
                user: result.data.data?.user,
                accessToken: result.data.data?.accessToken,
                refreshToken: result.data.data?.refreshToken,
              }),
            );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
      // invalidatesTags: ['blogs', 'contacts', 'messages', 'singleBlog'],
    }),
    register: builder.mutation({
      query: body => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApiSlice;
