/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Layout from "../../partials/layout";

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    return (
        <Layout>

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>


                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Step One</Text>
                        <Text style={styles.sectionDescription}>
                            asdasdasda1
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>See Your Changes</Text>
                        <Text style={styles.sectionDescription}>
                            asdasasd dd fdfg
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>See Your Changes</Text>
                        <Text style={styles.sectionDescription}>
                            asdasasd dd fdfg
                        </Text>
                    </View>



                </View>
            </ScrollView>


        </Layout>

    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },

    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
});

export default App;
