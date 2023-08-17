import React, { createContext, useState } from 'react';
import { PermissionStatus } from 'react-native-permissions';

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
export const PermissionsContext = createContext({} as PermissionsContextProps); //TODO qué exporta


//Provider
export const PermissionsProvider = ({ childen }: any) => {

    const askLocationPermission = () => {

    };
    const checkLocationPermission = () => {

    };

    const [permissions, setPermissions] = useState(permissionInitState);

    return (
        <PermissionsContext.Provider
            value={{
                permissions,
                askLocationPermission,
                checkLocationPermission,
            }}
        >
            {childen}
        </PermissionsContext.Provider>
    );
};
