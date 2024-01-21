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
    getSingleProgramById: builder.query<
      GetV1BlogsGetIdSuccessfulResponse,
      GetV1BlogsGetIdParameterId
    >({
      query: id => ({
        url: `program/get/${id}`,
      }),
    }),
    getAllProgram: builder.query<GetV1BlogsGetSuccessfulResponse, any>({
      query: () => ({
        url: `program/get`,
      }),
    }),
    deleteProgram: builder.mutation<
      DeleteV1BlogsDeleteIdSuccessfulResponse,
      DeleteV1BlogsDeleteIdParameterId
    >({
      query: id => ({
        url: `program/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateProgram: builder.mutation<
      PutV1BlogsUpdateIdSuccessfulResponse,
      PutV1BlogsUpdateIdParameterId
    >({
      query: id => ({
        url: `program/update/${id}`,
        method: 'PUT',
      }),
    }),
    addProgram: builder.mutation<
      PostV1BlogsAddSuccessfulResponse,
      PostV1BlogsAddRequestBody
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
