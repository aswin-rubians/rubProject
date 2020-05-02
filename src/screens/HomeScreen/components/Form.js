import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import colors from '../../../utils/colors';

export default ({ onSubmit = () => { } }) => {
    const [asteroidId, setAsteroidId] = useState('');
    return (
        <View style={styles.formContainer}>
            <Text style={styles.header}>Asteroid Search</Text>
            <TextInput style={styles.textInput} value={asteroidId} onChangeText={setAsteroidId} />
            <Button disabled={asteroidId.length < 1} style={styles.button} title="Submit" onPress={() => onSubmit(asteroidId)} />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        padding: '5%',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: '2%'
    },
    textInput: {
        marginVertical: '2%',
        width: '70%',
        minHeight: 44,
        padding: '2.5%',
        borderColor: `${colors.primaryColor}`,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
    },
    button: {
        margin: 20,
    },
});
