import { View } from 'react-native';
import React from 'react';
import Map from '../components/Map';

const MapScreen = () => {
    return (
        <View style={{ width: '90%', flex: 1, alignSelf: 'center' }}>
            <Map />
        </View>
    );
};

export default MapScreen;
