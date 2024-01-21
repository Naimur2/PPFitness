import {
  DeleteV1ProgramDeleteIdParameterId,
  DeleteV1ProgramDeleteIdSuccessfulResponse,
  GetV1ProgramGetIdParameterId,
  GetV1ProgramGetIdSuccessfulResponse,
  GetV1ProgramGetSuccessfulResponse,
  PostV1ProgramAddRequestBody,
  PostV1ProgramAddSuccessfulResponse,
  PutV1ProgramUpdateIdRequestBody,
  PutV1ProgramUpdateIdSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

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
    deleteProgram: builder.mutation<
      DeleteV1ProgramDeleteIdSuccessfulResponse,
      DeleteV1ProgramDeleteIdParameterId
    >({
      query: id => ({
        url: `program/delete/${id}`,
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
} = authApiSlice;
