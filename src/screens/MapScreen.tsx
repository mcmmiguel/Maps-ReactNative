import { View, Text } from 'react-native';
import React from 'react';
import Map from '../components/Map';

const MapScreen = () => {
    return (
        <View style={{ width: '90%', height: '20%', alignSelf: 'center' }}>
            <Text>MapScreen</Text>
            <Map />
        </View>
    );
};

export default MapScreen;
