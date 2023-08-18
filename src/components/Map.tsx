import React, { useRef, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';




const Map = () => {

    const { hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation,
        userLocation } = useLocation();

    const mapViewRef = useRef<MapView>();
    const followingRef = useRef<boolean>(true);

    useEffect(() => {
        followUserLocation();
        return () => {
            stopFollowUserLocation();
        };
    }, []);

    useEffect(() => {
        if (!followingRef.current) { return; }
        const { latitude, longitude } = userLocation;
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
        });
    }, [userLocation]);

    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation();

        followingRef.current = true;

        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
        });
    };

    if (!hasLocation) {
        <LoadingScreen />;
    }

    return (
        <>
            <MapView
                ref={(ele) => mapViewRef.current = ele!}
                style={{ flex: 1 }}
                showsUserLocation
                // provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={() => followingRef.current = false}
            >
                <Marker
                    coordinate={{
                        latitude: 18.935640112827077,
                        longitude: -103.96473259001439,
                    }}
                    title="AimeP3"
                    description="Ubicación de tu nutricionista"
                />
            </MapView>

            <Fab
                iconName="compass"
                onPress={centerPosition}
                style={{ position: 'absolute', bottom: 20, right: 20 }}
            />
        </>
    );
};

export default Map;
