import {
  DeleteV1BlogsDeleteIdParameterId,
  DeleteV1BlogsDeleteIdSuccessfulResponse,
  GetV1BlogsGetIdParameterId,
  GetV1BlogsGetIdSuccessfulResponse,
  GetV1BlogsGetSuccessfulResponse,
  GetV1BlogsTagsSuccessfulResponse,
  PostV1BlogsAddRequestBody,
  PostV1BlogsAddSuccessfulResponse,
  PutV1BlogsUpdateIdParameterId,
  PutV1BlogsUpdateIdSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleWorkoutById: builder.query<
      GetV1BlogsGetIdSuccessfulResponse,
      GetV1BlogsGetIdParameterId
    >({
      query: id => ({
        url: `workout/get/${id}`,
      }),
    }),
    getAllWorkout: builder.query<GetV1BlogsGetSuccessfulResponse, any>({
      query: () => ({
        url: `workout/get`,
      }),
    }),
    deleteWorkout: builder.mutation<
      DeleteV1BlogsDeleteIdSuccessfulResponse,
      DeleteV1BlogsDeleteIdParameterId
    >({
      query: id => ({
        url: `workout/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateWorkout: builder.mutation<
      PutV1BlogsUpdateIdSuccessfulResponse,
      PutV1BlogsUpdateIdParameterId
    >({
      query: id => ({
        url: `workout/update/${id}`,
        method: 'PUT',
      }),
    }),
    addWorkout: builder.mutation<
      PostV1BlogsAddSuccessfulResponse,
      PostV1BlogsAddRequestBody
    >({
      query: () => ({
        url: `workout/add`,
        method: 'POST',
      }),
    }),
    addWorkoutAddByProgram: builder.mutation<
      PostV1BlogsAddSuccessfulResponse,
      PostV1BlogsAddRequestBody
    >({
      query: () => ({
        url: `workout/add/by-program`,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddWorkoutMutation,
  useDeleteWorkoutMutation,
  useGetAllWorkoutQuery,
  useGetSingleWorkoutByIdQuery,
} = authApiSlice;
