import queryString from 'query-string';
import {
  DeleteV1AuthorDeleteIdSuccessfulResponse,
  GetV1AuthorGetIdSuccessfulResponse,
  GetV1AuthorGetSuccessfulResponse,
  PostV1AuthorAddRequestBody,
  PostV1AuthorAddSuccessfulResponse,
  PutV1AuthorUpdateIdSuccessfulResponse,
} from '@/store/api';
import { apiSlice } from '..';
import { IUpdateAuthorBody, TPaginatedInput } from './types';

export const authorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthor: builder.query<GetV1AuthorGetSuccessfulResponse, void>({
      query: () => ({
        url: 'author/get',
      }),
      providesTags: ['author'],
    }),
    getMoreAuthor: builder.query<GetV1AuthorGetSuccessfulResponse, TPaginatedInput>({
      query: (args) => ({
        url: `author/get?${queryString.stringify(args)}`,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.data?.authors) {
            const data = result?.data?.data?.authors || [];
            const update = authorApiSlice.util.updateQueryData('getAuthor', undefined, (draft) => {
              draft?.data?.authors?.push(...data);
              const { meta } = draft.data;
              if (meta) {
                meta.total = result?.data?.data?.meta?.total ?? 0;
                meta.page = result?.data?.data?.meta?.page ?? 1;
                meta.limit = result?.data?.data?.meta?.limit ?? 10;
              }
            });
            dispatch(update);
          }
          return result;
        } catch (error: any) {
          return error;
        }
      },
      providesTags: ['blogs'],
    }),
    getSingleAuthor: builder.query<GetV1AuthorGetIdSuccessfulResponse, string>({
      query: (id) => ({
        url: `author/get/${id}`,
      }),
      providesTags: ['singleAuthor'],
    }),
    addAuthor: builder.mutation<PostV1AuthorAddSuccessfulResponse, PostV1AuthorAddRequestBody>({
      query: (body) => ({
        url: 'author/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['author', 'singleAuthor'],
    }),
    updateAuthor: builder.mutation<PutV1AuthorUpdateIdSuccessfulResponse, IUpdateAuthorBody>({
      query: ({ id, ...body }) => ({
        url: `author/update/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['author', 'singleAuthor'],
    }),
    deleteAuthor: builder.mutation<DeleteV1AuthorDeleteIdSuccessfulResponse, string>({
      query: (id) => ({
        url: `author/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['author', 'singleBlog'],
    }),
  }),
});

export const {
  useGetAuthorQuery,
  useGetMoreAuthorQuery,
  useGetSingleAuthorQuery,
  useAddAuthorMutation,
  useUpdateAuthorMutation,
  useDeleteAuthorMutation,
} = authorApiSlice;
