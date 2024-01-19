import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRoutes from '@routes/AuthRoutes';
import BottomTabs from '@routes/BottomTabs';
import LayoutRoutes from '@routes/LayoutRoutes';
import {selectAuth} from '@store/features/authSlice';
import {useSelector} from 'react-redux';

export default function Routes() {
  const {accessToken} = useSelector(selectAuth);

  return accessToken ? <LayoutRoutes /> : <AuthRoutes />;
}
