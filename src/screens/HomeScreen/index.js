import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { API_KEY } from 'react-native-dotenv';

import Layout from '../../components/Layout';
import colors from '../../utils/colors';
import Form from './components/Form';
import RandomButton from './components/randomButton';
import Request from '../../utils/Request';
import Loader from '../../components/Loader';

const api_key = API_KEY || '';

export default props => {
    const [loading, setLoading] = useState(false);
    const { navigation: { navigate = () => { } } = {} } = props;
    // OnAstroid ID Recieved
    const retrieveAstroid = asteroid => {
        setLoading(true);
        Request({ url: `/${asteroid}`, params: { api_key } }).then(resp => {
            setLoading(false);
            const {
                name = null,
                nasa_jpl_url = null,
                is_potentially_hazardous_asteroid = false,
            } = resp;
            if (!(name && nasa_jpl_url)) throw new Error('Something Went Wrong');
            else navigate('Detail', {
                asteroid: {
                    name,
                    nasa_jpl_url,
                    is_potentially_hazardous_asteroid
                },
            })
        }).catch(() => {
            setLoading(false);
        });
    };
    // on Random Asteroid Press
    const onRandomAsteroid = () => {
        setLoading(true);
        Request({ url: '/browse', params: { api_key } }).then(resp => {
            const { near_earth_objects = [] } = resp;
            if (!Array.isArray(near_earth_objects) || near_earth_objects.length < 1) {
                setLoading(false);
                return;
            } else {
                let randomIndex = Math.floor(Math.random() * near_earth_objects.length);
                const { id = null } = near_earth_objects[randomIndex] || {};
                if (id) retrieveAstroid(id)
                else throw new Error('Something went Wrong.');
            }
        }).catch(() => setLoading(false))
    };

    return (
        <Layout>
            <View style={styles.container}>
                {loading ? <Loader loading /> : <Form onSubmit={retrieveAstroid} />}
                <View style={styles.randomContainer}>
                    <RandomButton onPress={onRandomAsteroid} />
                </View>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.backgroundWhite,
        alignItems: 'center',
        justifyContent: 'center'
    },
    randomContainer: {
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
})