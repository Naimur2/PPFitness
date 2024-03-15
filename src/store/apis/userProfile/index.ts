import {
  DeleteV1ProfileDeleteIdParameterId,
  DeleteV1ProfileDeleteIdSuccessfulResponse,
  GetV1ProfileGetAllSuccessfulResponse,
  GetV1ProfileGetCircumferencesErrorResponse,
  GetV1ProfileGetCircumferencesSuccessfulResponse,
  GetV1ProfileGetSingleIdParameterId,
  GetV1ProfileGetSingleIdSuccessfulResponse,
  GetV1ProfileGetSingleSuccessfulResponse,
  GetV1ProfileGetWeightsSuccessfulResponse,
  PostV1FileDeleteRequestBody,
  PostV1FileDeleteSuccessfulResponse,
  PostV1FileUploadRequestBody,
  PostV1FileUploadSuccessfulResponse,
  PostV1ProfileUpdateRequestBody,
  PostV1ProfileUpdateSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';
import {TCircumferenceParams, TGetWeightParams} from './types';
import queryString from 'query-string';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleProfile: builder.query<
      GetV1ProfileGetSingleSuccessfulResponse,
      void
    >({
      query: () => ({
        url: `profile/get/single`,
      }),
      providesTags: ['ProfileUpdate'],
    }),
    getSingleProfileById: builder.query<
      GetV1ProfileGetSingleIdSuccessfulResponse,
      GetV1ProfileGetSingleIdParameterId
    >({
      query: id => ({
        url: `profile/get/single/${id}`,
      }),
    }),
    getUserWeights: builder.query<
      GetV1ProfileGetWeightsSuccessfulResponse,
      TGetWeightParams
    >({
      query: args => ({
        url: `profile/get/weights?${queryString.stringify(args)}`,
      }),
    }),
    getAllProfile: builder.query<GetV1ProfileGetAllSuccessfulResponse, string>({
      query: () => ({
        url: `profile/get/all`,
      }),
    }),
    getUserCircumferences: builder.query<
      GetV1ProfileGetCircumferencesSuccessfulResponse,
      TCircumferenceParams
    >({
      query: (body) => {
        const qs = queryString.stringify(body);
        return {
          url: `profile/get/circumferences?` + qs,
        };
      },
    }),
    updateProfile: builder.mutation<
      PostV1ProfileUpdateSuccessfulResponse,
      PostV1ProfileUpdateRequestBody
    >({
      query: body => ({
        url: 'profile/update',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['ProfileUpdate', 'WorkoutPerWeek'],
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
    updateFile: builder.mutation<
      PostV1FileUploadSuccessfulResponse,
      PostV1FileUploadRequestBody
    >({
      query: body => ({
        url: 'file/upload',
        method: 'POST',
        body,
      }),
    }),
    deleteFile: builder.mutation<
      PostV1FileDeleteSuccessfulResponse,
      PostV1FileDeleteRequestBody
    >({
      query: id => ({
        url: `file/delete/${id}`,
        method: 'POST',
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
  useUpdateFileMutation,
  useDeleteFileMutation,
  useGetUserWeightsQuery,
  useGetUserCircumferencesQuery
} = authApiSlice;
