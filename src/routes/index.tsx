import AuthRoutes from '@routes/AuthRoutes';
import {selectAuth} from '@store/features/authSlice';
import {useSelector} from 'react-redux';
import LayoutRoutes from './LayoutRoutes';
import useNotificationPermission from '@hooks/useNotificationPermission';
import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

export default function Routes() {
  const {accessToken} = useSelector(selectAuth);
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
      });
  }, []);
  return accessToken ? <LayoutRoutes /> : <AuthRoutes />;
}
