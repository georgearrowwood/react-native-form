import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 0,
    marginTop: 9,
    marginLeft: 9,
    marginRight: 9,
    marginBottom: 3,
  },

  label: {
    color: "#858585",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  labelError: {
    color: "red"
  },

  textInput: {
    color: "black",
    borderRadius: 4,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#858585',
    paddingLeft: 11,
    height: 50,
    backgroundColor: 'white',
    fontSize: 18,
  },
  textInputError: {
    borderColor: 'red'
  },

  inputErrorBox: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 6,
    marginTop: 7,
  },
  inputErrorText: {
    color: "white",
    fontSize: 16,
  },
});
