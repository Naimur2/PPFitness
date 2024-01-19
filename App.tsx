import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import theme from '@theme/index';
import AuthRoutes from '@routes/AuthRoutes';
import BottomTabs from '@routes/BottomTabs';
import LatoutRoutes from '@routes/LatoutRoutes';
import store from '@store/index';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <LatoutRoutes />
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}
