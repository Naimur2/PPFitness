import {
  DeleteV1WorkoutDeleteIdParameterId,
  DeleteV1WorkoutDeleteIdSuccessfulResponse,
  GetV1WorkoutGetIdParameterId,
  GetV1WorkoutGetIdSuccessfulResponse,
  GetV1WorkoutGetSuccessfulResponse,
  GetV1WorkoutPerWeekSuccessfulResponse,
  PostV1WorkoutAddByProgramRequestBody,
  PostV1WorkoutAddByProgramSuccessfulResponse,
  PostV1WorkoutAddRequestBody,
  PostV1WorkoutAddSuccessfulResponse,
  PutV1WorkoutUpdateIdParameterId,
  PutV1WorkoutUpdateIdSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleWorkoutById: builder.query<
      GetV1WorkoutGetIdSuccessfulResponse,
      GetV1WorkoutGetIdParameterId
    >({
      query: id => ({
        url: `workout/get/${id}`,
      }),
    }),
    getAllWorkout: builder.query<GetV1WorkoutGetSuccessfulResponse, void>({
      query: () => ({
        url: `workout/get`,
      }),
    }),
    deleteWorkout: builder.mutation<
      DeleteV1WorkoutDeleteIdSuccessfulResponse,
      DeleteV1WorkoutDeleteIdParameterId
    >({
      query: id => ({
        url: `workout/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateWorkout: builder.mutation<
      PutV1WorkoutUpdateIdSuccessfulResponse,
      PutV1WorkoutUpdateIdParameterId
    >({
      query: props => {
        return {
          url: `workout/update/${props?.id}`,
          method: 'POST',
          body: props?.body,
        };
      },
      invalidatesTags: ['AddWorkout'],
    }),
    addWorkout: builder.mutation<
      PostV1WorkoutAddSuccessfulResponse,
      PostV1WorkoutAddRequestBody
    >({
      query: props => ({
        url: `workout/add`,
        method: 'POST',
        body: props,
      }),
      invalidatesTags: ['AddWorkout'],
    }),
    addWorkoutAddByProgram: builder.mutation<
      PostV1WorkoutAddByProgramSuccessfulResponse,
      PostV1WorkoutAddByProgramRequestBody
    >({
      query: props => ({
        url: `workout/add/by-program`,
        method: 'POST',
        body: props,
      }),
    }),
    getWorkoutPerWeek: builder.query<GetV1WorkoutPerWeekSuccessfulResponse, void>({
      query: () => ({
        url: `workout/per-week`,
      }),
      providesTags: ['WorkoutPerWeek'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddWorkoutMutation,
  useDeleteWorkoutMutation,
  useGetAllWorkoutQuery,
  useGetSingleWorkoutByIdQuery,
  useUpdateWorkoutMutation,
  useAddWorkoutAddByProgramMutation,
  useGetWorkoutPerWeekQuery,
} = authApiSlice;
