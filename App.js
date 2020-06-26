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
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

        <View style={{ borderWidth: 1,           borderColor: "blue", height: '100%'}}>

          <View style={{ flex: 1 } }>

        <View style={styles.header}>
          <Text> hrasas </Text>
        </View>


          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>


            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                 asdasdasda
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

          <View style={styles.footer}>
            <Text> footer </Text>
          </View>

          </View>

        </View>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  header: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: "red",
  },
  footer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: "green",
    justifyContent: 'flex-end',
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
