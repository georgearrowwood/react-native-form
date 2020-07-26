import React, { Component } from "react";

import {View, Text, TextInput, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';
import ValidationComponent from 'react-native-form-validator';

import Layout from "../../partials/layout";
import InputTextLabel from "../../partials/input-text-label";

export default class FormTest extends ValidationComponent {
 
  constructor(props) {
    super(props);
    this.state = {name : "", email: "aa"};
  }
 
  _onPressButton = () => {
    // Call ValidationComponent validate method
    this.validate({
      name: {minlength:3, maxlength:7, required: true},
      email: {email: true, required: true},
     
    });

    if (this.isFormValid()) {
      console.log('subm', this.state)
    } else {
      console.log('nosubm', this.state)
    }
  }
 
  render() {
      return (
        <Layout>
        <ScrollView style={styles.scrollView}>
          <Text>Form</Text>
          <View style={{borderColor:'red',borderWidth:1}}>
            <InputTextLabel  reff="name" form={this} label="Name"/>
            <InputTextLabel  reff="email" form={this} label="Email"/>
           
            <Text>
             {this.getErrorMessages()}
          </Text>
  
            <TouchableHighlight onPress={this._onPressButton}>
              <Text>Submit</Text>
            </TouchableHighlight>
 
          
          </View>
          </ScrollView>
        </Layout>
      );
  }
 
}

const styles = StyleSheet.create({
  formInputText: {
    
    height: 20,
    borderColor: 'green',
    borderWidth: 1
  },
  container: {
    flex: 1
  }
});
