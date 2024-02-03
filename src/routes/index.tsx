import AuthRoutes from '@routes/AuthRoutes';
import {
  selectAuth,
  setFcmToken,
} from '@store/features/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import LayoutRoutes from './LayoutRoutes';
import useNotificationPermission from '@hooks/useNotificationPermission';
import React from 'react';
import messaging from '@react-native-firebase/messaging';

export default function Routes() {
  // Hooks
  const {accessToken} = useSelector(selectAuth);
  const dispatch = useDispatch();
  const {handleNotificationPermission} = useNotificationPermission();

  const permissionsHandler = async () => {
    await handleNotificationPermission();
  };

  React.useEffect(() => {
    permissionsHandler();
  }, []);

  React.useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        console.log('token for device', token);
        dispatch(setFcmToken(token));
      });
  }, []);
  //

  return accessToken ? <LayoutRoutes /> : <AuthRoutes />;
}
