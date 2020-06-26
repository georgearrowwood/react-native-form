/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
//


import React, { Component } from 'react';
import { View, Text, Image , StyleSheet, ScrollView } from 'react-native';
import makeInput, {  handleTextInput, withFocus, withErrorIfNeeded } from 'react-native-formik';
import { compose } from "recompose";
import isEmpty from "lodash.isempty";

import Layout from "../../partials/layout";
import Footer from "../../partials/layout/footer";
import InputTextL from '../../partials/input-text-label';
import Button from '../../partials/button';
// import styles from './styles';

const InputTextLabel = compose(
    handleTextInput,
    withFocus,
)(InputTextL);

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },


});

class FormView extends Component {


    render() {
        const { handleSubmit, errors, values, submitCount, touched, bookingCurrency, balance, fil } = this.props;
        let errorMessage = this.props.errorMessage || '';
        console.log('ff err', errors)
        if (!isEmpty(errors) && submitCount) {
            errorMessage = 'Enter required fields';
        }
        return (
            <Layout>

                          <ScrollView
                                contentInsetAdjustmentBehavior="automatic"
                                style={styles.scrollView}>

                    <InputTextLabel
                        label="First Name"
                        placeholder="First Name"
                        name="name"
                    />
                    <InputTextLabel
                        label="Last Name"
                        placeholder="Last Name"
                        name="surname"
                    />

                    <Button
                        // customContainerStyle={styles.payButton}
                        onPress={handleSubmit}
                        title="Submit"
                    />
                          </ScrollView>
                            <Footer />

                         </Layout>
        );
    };
}

export default FormView;

