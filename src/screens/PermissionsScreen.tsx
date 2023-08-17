import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { check, PERMISSIONS, RESULTS, PermissionStatus, request } from 'react-native-permissions';

const PermissionsScreen = () => {

    const checkLocationPermission = async () => {

        let permissionsStatus: PermissionStatus;

        if (Platform.OS === 'ios') {

            permissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        } else {
            permissionsStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        console.log({ permissionsStatus });
    };


    return (
        <View style={styles.container}>
            <Text>PermissionsScreen</Text>

            <Button
                title="Permiso"
                onPress={checkLocationPermission}
            />
        </View>
    );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
