import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import PermissionsScreen from '../screens/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

const Navigator = () => {
    const { permissions } = useContext(PermissionsContext);

    if (permissions.locationStatus === 'unavailable') {
        return <LoadingScreen />;
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',

                },
            }}
        >
            {
                (permissions.locationStatus === 'granted')
                    ? <Stack.Screen name="Map" component={MapScreen} />
                    : <Stack.Screen name="Permissions" component={PermissionsScreen} />
            }
        </Stack.Navigator>
    );
};

export default Navigator;
