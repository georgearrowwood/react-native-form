/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';

import Header from './header';

const Layout: () => React$Node = (props) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>

                <View style={styles.mainContainer}>

                    <View style={styles.container}>

                        <Header />

                        {props.children}


                    </View>

                </View>

            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 1,           borderColor: "blue", height: '100%'
    },
    container: {
        flex: 1
    }
});

export default Layout;
