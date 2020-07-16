import React, { Component } from "react";
// import { withForxmik } from "formik";
// import { connect } from "react-redux";
// import { compose } from "recompose";

import FormView from "./view";
// import { formSubmittedAction } from "./actions";

/*
const formikData = {
  mapPropsToValues: props => {
    return {
      name: "",
      surname: ""
    };
  },
  validate: (values, props) => {
    const errors = {};
    if (!values.name) errors.name = "Required";
    if (!values.surname) errors.surname = "Required";

    return errors;
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    // console.log('aaaasssss-------------------')
    // await props.formSubmittedAction(true);
    setSubmitting(false);
  },
  displayName: "TestForm"
};

function mapStateToProps(state) {
  // console.log('p st', state)
  return {
    submitted: state.form.submitted
  };
}

export default compose(
  // connect(mapStateToProps, { formSubmittedAction }),
  withFormik(formikData),
)(FormView);

// import React from "react";
// import { Button, Text, ScrollView } from "react-native";
// import { Formik } from "formik";
// import { compose } from "recompose";
// import {
//   handleTextInput,
//   withNextInputAutoFocusForm,
//   withNextInputAutoFocusInput,
//   withFormikControl
// } from "react-native-formik";
// import { TextField } from "react-native-material-textfield";
// import * as Yup from "yup";

// const MyInput = compose(
//   handleTextInput,
//   withNextInputAutoFocusInput
// )(TextField);
// const Form = withNextInputAutoFocusForm(ScrollView, {
//   submitAfterLastInput: false
// });


// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .required()
//     .email(),
//   password: Yup.string()
//     .required()
//     .min(6, "Too short"),
 
// });

// export default () => (
//   <Formik
//     onSubmit={values => alert(JSON.stringify(values, null, 2))}
//     validationSchema={validationSchema}
//     // initialValues={{ star: true }}
//   >
//     {props => {
//       return (
//         <Form style={{ padding: 10 }}>
//           <MyInput label="Email" name="email" type="email" />
//           <MyInput label="Password" name="password" type="password" />
        

//           <Button onPress={props.handleSubmit} title="SUBMIT" />
          
//         </Form>
//       );
//     }}
//   </Formik>
// );

*/

// import React, {Component}  from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
 
export default class FormTest extends ValidationComponent {
 
  constructor(props) {
    super(props);
    this.state = {name : "My name", email: "tibtib@gmail.com", number:"56", date: "2017-03-01"};
  }
 
  _onPressButton = () => {
    // Call ValidationComponent validate method
    this.validate({
      name: {minlength:3, maxlength:7, required: true},
      email: {email: true},
      number: {numbers: true},
      date: {date: 'YYYY-MM-DD'}
    });
  }
 
  render() {
      return (
        <View>
          <TextInput ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <TextInput ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <TextInput ref="number" onChangeText={(number) => this.setState({number})} value={this.state.number} />
          <TextInput ref="date" onChangeText={(date) => this.setState({date})} value={this.state.date} />
          {this.isFieldInError('date') && this.getErrorsInField('date').map(errorMessage => <Text>{errorMessage}</Text>) }
 
          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Submit</Text>
          </TouchableHighlight>
 
          <Text>
            {this.getErrorMessages()}
          </Text>
        </View>
      );
  }
 
}