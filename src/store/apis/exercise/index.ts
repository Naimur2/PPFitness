import {
  DeleteV1ExerciseDeleteIdParameterId,
  DeleteV1ExerciseDeleteIdSuccessfulResponse,
  GetV1ExerciseGetIdParameterId,
  GetV1ExerciseGetIdSuccessfulResponse,
  GetV1ExerciseGetSuccessfulResponse,
  PostV1ExerciseAddRequestBody,
  PostV1ExerciseAddSuccessfulResponse,
  PutV1ExerciseUpdateIdRequestBody,
  PutV1ExerciseUpdateIdSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleExerciseById: builder.query<
      GetV1ExerciseGetIdSuccessfulResponse,
      GetV1ExerciseGetIdParameterId
    >({
      query: id => ({
        url: `exercise/get/${id}`,
      }),
    }),
    getAllExercise: builder.query<GetV1ExerciseGetSuccessfulResponse, void>({
      query: () => ({
        url: `exercise/get`,
      }),
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
      query: () => ({
        url: `exercise/add`,
        method: 'POST',
      }),
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
} = authApiSlice;
