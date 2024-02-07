import { BASE_URL } from '@env';
import {
  GetV1ChatChatSuccessfulResponse,
  GetV1ChatGetIdParameterId,
  GetV1ChatGetIdSuccessfulResponse,
  PostV1ChatSendMessagesRequestBody,
  PostV1ChatSendMessagesSuccessfulResponse,
} from '@store/schema';
import { io } from 'socket.io-client';
import { apiSlice } from '../index';

export const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getChatById: builder.query<
      GetV1ChatGetIdSuccessfulResponse,
      GetV1ChatGetIdParameterId
    >({
      query: id => ({
        url: `chat/get/${id}?page=1&limit=20`,
      }),
      onCacheEntryAdded: async (arg, api) => {
        await api.cacheDataLoaded;
        const socket = io(BASE_URL, {transports: ['websocket']});
        socket.on('connect', () => {
          console.log('connect');
        });
        socket.on('disconnect', () => {
          console.log('disconnect');
        });
        socket.on('message', (data: any) => {
          console.log('message', data);
        });
        socket.on('error', (data: any) => {
          console.log('error', data);
        });

        try {
          socket.on(
            'CHAT_MESSAGE',
            (
              data: PostV1ChatSendMessagesSuccessfulResponse['data']['data'] & {
                user: string;
              },
            ) => {
              if (arg === data.user) {
                chatApiSlice.util.updateQueryData('getChatById', arg, draft => {
                  if (draft.data.data.length) {
                    draft.data.data.push(data);
                  }
                });
              }
            },
          );

          await api.cacheEntryRemoved;
          socket.disconnect();
        } catch (error) {
          socket.disconnect();
        }
      },
    }),
    getMoreChatById: builder.query<
      GetV1ChatGetIdSuccessfulResponse,
      TPagination & {id: string}
    >({
      query: ({page, id, limit}) => ({
        url: `chat/get/${id}?page=${page}&limit=${limit}`,
      }),
      async onQueryStarted(arg, api) {
        const {id} = arg;
        try {
          const res = await api.queryFulfilled;
          const reducer = chatApiSlice.util.updateQueryData(
            'getChatById',
            id,
            draft => {
              if (draft.data.data.length) {
                draft.data.data = [...draft.data.data, ...res.data.data.data];
                draft.data.meta = res.data.data.meta;
              }
            },
          );
          api.dispatch(reducer);
        } catch (error) {
          console.error(error);
        }
      },
      // providesTags: ['Chats'],
    }),
    getAllChat: builder.query<GetV1ChatChatSuccessfulResponse, void>({
      query: () => ({
        url: `chat/chat`,
      }),
      providesTags: ['Chats'],
    }),
    sendMessage: builder.mutation<
      PostV1ChatSendMessagesSuccessfulResponse,
      PostV1ChatSendMessagesRequestBody & {id: string}
    >({
      query: ({id, ...props}) => ({
        url: `chat/send-messages`,
        method: 'POST',
        body: props,
      }),
      async onQueryStarted(arg, api) {
        const {id} = arg;
        try {
          const res = await api.queryFulfilled;
          const reducer = chatApiSlice.util.updateQueryData(
            'getChatById',
            id,
            draft => {
              if (draft.data.data.length) {
                if (draft.data.data.length) {
                  draft.data.data.push(res.data.data.data);
                }
              }
            },
          );
          api.dispatch(reducer);
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const {useGetChatByIdQuery, useGetAllChatQuery, useSendMessageMutation} =
  chatApiSlice;
