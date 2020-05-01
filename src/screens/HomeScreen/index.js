import React from 'react';
import { View, Text } from 'react-native';

export default props => {
    console.log("PROPS DETAILS", props);
    const { navigation: { navigate = () => { } } = {} } = props;
    return (
        <View>
            <Text onPress={() => navigate('Detail')}>Home Screen</Text>
        </View>
    );
}