import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import theme from '@theme/index';
import AuthRoutes from '@routes/AuthRoutes';
import BottomTabs from '@routes/BottomTabs';
import LatoutRoutes from '@routes/LatoutRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <LatoutRoutes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
