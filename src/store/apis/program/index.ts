import {
  DeleteV1ProgramDeleteIdParameterId,
  DeleteV1ProgramDeleteIdSuccessfulResponse,
  DeleteV1ProgramRemoveParameterId,
  DeleteV1ProgramRemoveSuccessfulResponse,
  GetV1ProgramGetIdParameterId,
  GetV1ProgramGetIdSuccessfulResponse,
  GetV1ProgramGetSuccessfulResponse,
  GetV1ProgramScheduleSuccessfulResponse,
  GetV1ProgramUserSuccessfulResponse,
  PostV1ProgramAddRequestBody,
  PostV1ProgramAddSuccessfulResponse,
  PutV1ProgramAssignIdRequestBody,
  PutV1ProgramAssignIdSuccessfulResponse,
  PutV1ProgramUpdateIdRequestBody,
  PutV1ProgramUpdateIdSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';
import {TProgramScheduleQuery} from './type';
import queryString from 'query-string';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleProgramById: builder.query<
      GetV1ProgramGetIdSuccessfulResponse,
      GetV1ProgramGetIdParameterId
    >({
      query: id => ({
        url: `program/get/${id}`,
      }),
    }),
    getAllProgram: builder.query<GetV1ProgramGetSuccessfulResponse, void>({
      query: () => ({
        url: `program/get`,
      }),
    }),
    getProgramSchedule: builder.query<
      GetV1ProgramScheduleSuccessfulResponse,
      TProgramScheduleQuery
    >({
      query: args => {
        const query = queryString.stringify(args);
        return {
          url: `program/schedule?day=1&week=1&date=2024-01-25T13%3A44%3A55.175Z`,
        };
      },
      providesTags: ['AddWorkout', 'AddWorkout'],
    }),
    getProgramUser: builder.query<GetV1ProgramUserSuccessfulResponse, void>({
      query: () => ({
        url: `program/user`,
      }),
    }),
    deleteProgram: builder.mutation<
      DeleteV1ProgramDeleteIdSuccessfulResponse,
      DeleteV1ProgramDeleteIdParameterId
    >({
      query: id => ({
        url: `program/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    removeProgram: builder.mutation<
      DeleteV1ProgramRemoveSuccessfulResponse,
      DeleteV1ProgramRemoveParameterId
    >({
      query: id => ({
        url: `program/remove/${id}`,
        method: 'DELETE',
      }),
    }),
    updateProgram: builder.mutation<
      PutV1ProgramUpdateIdSuccessfulResponse,
      PutV1ProgramUpdateIdRequestBody
    >({
      query: id => ({
        url: `program/update/${id}`,
        method: 'PUT',
      }),
    }),
    assignProgram: builder.mutation<
      PutV1ProgramAssignIdSuccessfulResponse,
      PutV1ProgramAssignIdRequestBody
    >({
      query: props => ({
        url: `program/assign`,
        method: 'PUT',
        body: props,
      }),
    }),
    addProgram: builder.mutation<
      PostV1ProgramAddSuccessfulResponse,
      PostV1ProgramAddRequestBody
    >({
      query: () => ({
        url: `program/add`,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddProgramMutation,
  useDeleteProgramMutation,
  useGetAllProgramQuery,
  useGetSingleProgramByIdQuery,
  useGetProgramScheduleQuery,
  useGetProgramUserQuery,
  useAssignProgramMutation,
  useRemoveProgramMutation,
} = authApiSlice;
