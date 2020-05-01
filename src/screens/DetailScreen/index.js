import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../../components/Layout';
import colors from '../../utils/colors';

export default ({ route = {}, navigation: { goBack = () => { } } = {} }) => {
    const { params: { asteroid: {
        name = null,
        nasa_jpl_url = null,
        is_potentially_hazardous_asteroid = false
    } = {} } = {} } = route || {};
    useEffect(() => {
        if (!name || !nasa_jpl_url) goBack();
    }, [])
    return (
        <Layout>
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{name}</Text>
                    </View>
                    <View>
                        <Text>"nasa_jpl_url": {nasa_jpl_url}</Text>
                        <Text>"is_potentially_hazardous_asteroid": {is_potentially_hazardous_asteroid ? "true" : "false"}</Text>
                    </View>
                </View>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: `${colors.white}`,
        padding: '5%',
        shadowColor: `${colors.blackShadow}`,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        borderRadius: 5,
        elevation: 3,
    },
    header: {
        minWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        padding: 5,
    },
    headerText: {
        textAlign: 'center',
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',
        color: `${colors.primaryColor}`,
    }
});