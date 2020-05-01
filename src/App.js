import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <View>
                <Text>Hello</Text>
            </View>
        </NavigationContainer>
    );
}