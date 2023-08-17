import React, { createContext, useState } from 'react';
import { Platform } from 'react-native';
import { PermissionStatus, PERMISSIONS, request } from 'react-native-permissions';

//Así lucirá el estado
export interface PermissionsState {
    locationStatus: PermissionStatus;
}

//Estado inicial
export const permissionInitState: PermissionsState = {
    locationStatus: 'unavailable',
};

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

//Creación del contexto
export const PermissionsContext = createContext({} as PermissionsContextProps);


//Provider
export const PermissionsProvider = ({ children }: any) => {
    const [permissions, setPermissions] = useState(permissionInitState);

    const askLocationPermission = async () => {
        let permissionsStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        } else {
            permissionsStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionsStatus,
        });

    };

    const checkLocationPermission = () => {

    };


    return (
        <PermissionsContext.Provider
            value={{
                permissions,
                askLocationPermission,
                checkLocationPermission,
            }}
        >
            {children}
        </PermissionsContext.Provider>
    );
};
