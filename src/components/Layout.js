import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet } from 'react-native';

export default ({ children = null }) => (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
            {children}
        </KeyboardAvoidingView>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
});