import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import colors from '../utils/colors';

export default ({ loading = false }) => (
    <View style={styles.container}>
        <View style={styles.box}>
            <ActivityIndicator size="large" color={colors.primaryColor} />
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${colors.blackShadow}`
    },
    box: {
        backgroundColor: `${colors.backgroundWhite}`,
        padding: '8%',
        borderRadius: 20,
    }
});