import {
  DeleteV1ExerciseDeleteIdParameterId,
  DeleteV1ExerciseDeleteIdSuccessfulResponse,
  GetV1ExerciseGetIdParameterId,
  GetV1ExerciseGetIdSuccessfulResponse,
  GetV1ExerciseGetParameterSearch,
  GetV1ExerciseGetSuccessfulResponse,
  GetV1ExerciseHistoryIdParameterId,
  GetV1ExerciseHistoryIdSuccessfulResponse,
  GetV1ExerciseHistorySuccessfulResponse,
  PostV1ExerciseAddRequestBody,
  PostV1ExerciseAddSuccessfulResponse,
  PutV1ExerciseUpdateIdRequestBody,
  PutV1ExerciseUpdateIdSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';
import queryString from 'query-string';
import {ExerciseParamProps} from './types';
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getExerciseHistory: builder.query<
      GetV1ExerciseHistorySuccessfulResponse,
      ExerciseParamProps
    >({
      query: searchFilter => {
        const query = queryString.stringify(searchFilter);
        return {
          url: `exercise/history/${query}`,
        };
      },
    }),
    getExerciseHistoryBuyId: builder.query<
      GetV1ExerciseHistoryIdSuccessfulResponse,
      GetV1ExerciseHistoryIdParameterId
    >({
      query: id => ({
        url: `exercise/history/${id}`,
      }),
    }),
    getSingleExerciseById: builder.query<
      GetV1ExerciseGetIdSuccessfulResponse,
      GetV1ExerciseGetIdParameterId
    >({
      query: id => ({
        url: `exercise/get/${id}`,
      }),
    }),
    getAllExercise: builder.query<
      GetV1ExerciseGetSuccessfulResponse,
      ExerciseParamProps
    >({
      query: searchFilter => {
        const query = queryString.stringify(searchFilter);
        return {url: `exercise/get?${query}`};
      },
      providesTags: ['ExerciseAdd'],
    }),
    deleteExercise: builder.mutation<
      DeleteV1ExerciseDeleteIdSuccessfulResponse,
      DeleteV1ExerciseDeleteIdParameterId
    >({
      query: id => ({
        url: `exercise/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateExercise: builder.mutation<
      PutV1ExerciseUpdateIdSuccessfulResponse,
      PutV1ExerciseUpdateIdRequestBody
    >({
      query: props => ({
        url: `exercise/update/${props?.id}`,
        method: 'PUT',
        body: props?.body,
      }),
    }),
    addExercise: builder.mutation<
      PostV1ExerciseAddSuccessfulResponse,
      PostV1ExerciseAddRequestBody
    >({
      query: props => ({
        url: `exercise/add`,
        method: 'POST',
        body: props,
      }),
      invalidatesTags: ['ExerciseAdd'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddExerciseMutation,
  useDeleteExerciseMutation,
  useGetAllExerciseQuery,
  useGetSingleExerciseByIdQuery,
  useUpdateExerciseMutation,
  useGetExerciseHistoryBuyIdQuery,
  useGetExerciseHistoryQuery,
} = authApiSlice;
