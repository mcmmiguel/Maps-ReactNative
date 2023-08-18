import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';



const Map = () => {
    return (
        <>
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="AimeP3"
                    description="Ubicación de tu nutricionista"
                />
            </MapView>
        </>
    );
};

export default Map;
