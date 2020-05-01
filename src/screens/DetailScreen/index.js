import React from 'react';
import { View, Text } from 'react-native';

export default props => {
    console.log("PROPS DETAILS", props);
    return (
        <View>
            <Text>Details Screen</Text>
        </View>
    );
}