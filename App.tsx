import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigator from './src/navigation/navigator';
import { PermissionsProvider } from './src/context/PermissionsContext';
import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  );

};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
