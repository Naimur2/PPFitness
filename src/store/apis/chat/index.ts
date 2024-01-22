import {
  GetV1ChatChatSuccessfulResponse,
  GetV1ChatGetIdParameterId,
  GetV1ChatGetIdSuccessfulResponse,
  PostV1ChatSendMessagesRequestBody,
  PostV1ChatSendMessagesSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getChatById: builder.query<
      GetV1ChatGetIdSuccessfulResponse,
      GetV1ChatGetIdParameterId
    >({
      query: id => ({
        url: `chat/get/${id}`,
      }),
      providesTags: ['Chats'],
    }),
    getAllChat: builder.query<GetV1ChatChatSuccessfulResponse, void>({
      query: () => ({
        url: `chat/chat`,
      }),
      providesTags: ['Chats'],
    }),
    sendMessage: builder.mutation<
      PostV1ChatSendMessagesSuccessfulResponse,
      PostV1ChatSendMessagesRequestBody
    >({
      query: props => ({
        url: `chat/send-messages`,
        method: 'POST',
        body: props,
      }),
      invalidatesTags: ['Chats'],
    }),
  }),
  overrideExisting: true,
});

export const {useGetChatByIdQuery, useGetAllChatQuery, useSendMessageMutation} =
  authApiSlice;
