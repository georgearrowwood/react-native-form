/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text> hrasas </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: "red",
    },

});

export default Header;
