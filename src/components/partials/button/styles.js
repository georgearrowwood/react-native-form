import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    borderRadius: 8,
    width: '100%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#4388d6',
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  container: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 2,
    marginBottom: 1,
  },
  titleButton: {
    color: 'white',
    fontSize: 18,
  },
  disabled: {
    backgroundColor: "#c5bfbf"
  },
  isCachedIcon: {
    fontSize: 19,
    color: 'white',
    // position: 'absolute',
    marginTop: 21,
    // marginLeft: 30,
    height: 40,
    width: 18,
    // top: 0,
    // right: 20
  },
});  