import {
  GetV1BlogsGetIdSuccessfulResponse,
  GetV1ChecklistUserSuccessfulResponse,
  PostV1ChecklistAddRequestBody,
  PutV1ChecklistSubmitRequestBody,
  PutV1ChecklistSubmitSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCheckListByUser: builder.query<
      GetV1ChecklistUserSuccessfulResponse,
      PostV1ChecklistAddRequestBody['day']
    >({
      query: day => ({
        url: `checklist/user?day=${day}`,
      }),
      providesTags: ['checklist'],
    }),
    getCheckListById: builder.query<GetV1BlogsGetIdSuccessfulResponse, string>({
      query: id => ({
        url: `checklist/get/${id}`,
      }),
      providesTags: ['checklist'],
    }),
    submitCheckList: builder.mutation<
      PutV1ChecklistSubmitSuccessfulResponse,
      PutV1ChecklistSubmitRequestBody
    >({
      query: body => ({
        url: `checklist/submit`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['checklist'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetCheckListByUserQuery,
  useSubmitCheckListMutation,
  useGetCheckListByIdQuery,
} = authApiSlice;
