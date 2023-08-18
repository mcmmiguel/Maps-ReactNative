import React, { useRef, useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';

const Map = () => {

    const [showPolyline, setShowPolyline] = useState(true);

    const { hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation,
        routeLines,
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
                    latitude: 18.935640112827077,
                    longitude: -103.96473259001439,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={() => followingRef.current = false}
            >
                {
                    showPolyline && (
                        <Polyline
                            coordinates={routeLines}
                            strokeColor="black"
                            strokeWidth={3}
                        />
                    )
                }

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
                iconName="compass-outline"
                onPress={centerPosition}
                style={{ position: 'absolute', bottom: 20, right: 20 }}
            />

            <Fab
                iconName="brush-outline"
                onPress={() => setShowPolyline(!showPolyline)}
                style={{ position: 'absolute', bottom: 80, right: 20 }}
            />
        </>
    );
};

export default Map;
