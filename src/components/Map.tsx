import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const Map = () => {
    return (
        <>
            <MapView
                style={{ flex: 1 }}
                showsUserLocation
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 18.935640112827077,
                    longitude: -103.96473259001439,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
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
        </>
    );
};

export default Map;
