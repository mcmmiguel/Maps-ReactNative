import { View, Text, StyleProp, ViewStyle, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

const Fab = ({ iconName, onPress, style = {} }: Props) => {
    return (
        <View style={{ ...style as any }}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={styles.blackButton}
            >

                <Icon
                    name={iconName}
                    color="white"
                    size={35}
                    style={{}}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Fab;


const styles = StyleSheet.create({
    blackButton: {
        zIndex: 9999,
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,

        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
});
