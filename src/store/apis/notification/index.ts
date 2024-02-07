import {
  DeleteV1NotificationFcmIdParameterId,
  DeleteV1NotificationFcmIdSuccessfulResponse,
  GetV1NotificationGetSuccessfulResponse,
  PostV1NotificationFcmRequestBody,
  PostV1NotificationFcmSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNotification: builder.query<
      GetV1NotificationGetSuccessfulResponse,
      void
    >({
      query: day => {
        return {
          url: `notification/get`,
        };
      },
    }),
    addFcmToken: builder.mutation<
      PostV1NotificationFcmSuccessfulResponse,
      PostV1NotificationFcmRequestBody
    >({
      query: props => ({
        url: `notification/fcm`,
        method: 'POST',
        body: props,
      }),
    }),
    deleteFcmToken: builder.mutation<
      DeleteV1NotificationFcmIdSuccessfulResponse,
      DeleteV1NotificationFcmIdParameterId
    >({
      query: props => ({
        url: `notification/fcm/${props}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddFcmTokenMutation,
  useDeleteFcmTokenMutation,
  useGetNotificationQuery,
} = authApiSlice;
