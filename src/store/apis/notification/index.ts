import {
  DeleteV1NotificationFcmIdParameterId,
  DeleteV1NotificationFcmIdSuccessfulResponse,
  PostV1NotificationFcmRequestBody,
  PostV1NotificationFcmSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
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
      query: id => ({
        url: `notification/fcm/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useAddFcmTokenMutation, useDeleteFcmTokenMutation} = authApiSlice;
