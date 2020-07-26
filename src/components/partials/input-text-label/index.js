import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const TextInputWithLabel = (props) => {
  const { error, containerStyle, inputStyle, focused, label } = props;
  // console.log('inpu prrr2', props)
  const inputStyles = [styles.textInput];
  const containerStyles = [styles.container];
  const labelStyles = [styles.label];

  if (error) {
    inputStyles.push(styles.textInputError);
    labelStyles.push(styles.labelError);
  }

  if (containerStyle) {
    containerStyles.push(containerStyle);
  }  

  if (inputStyle) {
    inputStyles.push(inputStyle);
  }  

  return (
    <View style={containerStyles}>
      {!!label &&      
        <Text style={labelStyles}>{label}</Text>
      }  
      <TextInput
        style={inputStyles}
        {...props}
        placeholderTextColor="grey"
        autoCapitalize="none"
      />
      {!!error && error !== 'Required' && !focused && 
        <View style={styles.inputErrorBox}>
          <Text style={styles.inputErrorText}>{error}</Text>
        </View>
      }      
    </View>        
  )
}

export default TextInputWithLabel;