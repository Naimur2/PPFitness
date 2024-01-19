import {
  DeleteV1ProfileDeleteIdParameterId,
  DeleteV1ProfileDeleteIdSuccessfulResponse,
  GetV1ProfileGetAllSuccessfulResponse,
  GetV1ProfileGetSingleIdParameterId,
  GetV1ProfileGetSingleIdSuccessfulResponse,
  GetV1ProfileGetSingleSuccessfulResponse,
  PostV1ProfileUpdateRequestBody,
  PostV1ProfileUpdateSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleProfile: builder.query<
      GetV1ProfileGetSingleSuccessfulResponse,
      string
    >({
      query: () => ({
        url: `profile/get/single`,
      }),
    }),
    getSingleProfileById: builder.query<
      GetV1ProfileGetSingleIdSuccessfulResponse,
      GetV1ProfileGetSingleIdParameterId
    >({
      query: id => ({
        url: `profile/get/single/${id}`,
      }),
    }),
    getAllProfile: builder.query<GetV1ProfileGetAllSuccessfulResponse, string>({
      query: () => ({
        url: `profile/get/all`,
      }),
    }),
    updateProfile: builder.mutation<
      PostV1ProfileUpdateSuccessfulResponse,
      PostV1ProfileUpdateRequestBody
    >({
      query: body => ({
        url: 'auth/profile/update',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data: result} = await queryFulfilled;

          if (result.data) {
            // dispatch(
            //   setProfile({
            //     ...result.data,
            //   }),
            // );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
    }),
    deleteProfile: builder.mutation<
      DeleteV1ProfileDeleteIdSuccessfulResponse,
      DeleteV1ProfileDeleteIdParameterId
    >({
      query: id => ({
        url: `auth/profile/delete/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useUpdateProfileMutation,
  useGetAllProfileQuery,
  useGetSingleProfileByIdQuery,
  useGetSingleProfileQuery,
  useDeleteProfileMutation,
} = authApiSlice;
