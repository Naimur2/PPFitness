import AuthRoutes from '@routes/AuthRoutes';
import {
  selectAuth,
  setFcmToken,
} from '@store/features/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import LayoutRoutes from './LayoutRoutes';
import useNotificationPermission from '@hooks/useNotificationPermission';
import React from 'react';

export default function Routes() {
  // Hooks
  const {accessToken} = useSelector(selectAuth);

  //

  return accessToken ? <LayoutRoutes /> : <AuthRoutes />;
}
