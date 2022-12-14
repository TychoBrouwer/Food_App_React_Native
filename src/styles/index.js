import { StyleSheet, Dimensions } from 'react-native';

// import styles
import config from '../config';

// screen height of the machine running the app
const ScreenHeight = Dimensions.get('window').height;

// main styles for the application
// which will be used on multiple screens
const stylesMain = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: ScreenHeight,
    display: 'flex',
    flexDirection: 'column',
  },

  text: {
    color: config.primaryTextColor,
  },

  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notification: {
    height: 20,
    width: '100%',
    marginLeft: 20,
  },

  content: {
    width: '80%',
    marginTop: '10%',
    marginBottom: '5%',
    flex: 1,
  },

  notificationText: {
    color: config.errorColor,
  },

  banner: {
    alignItems: 'center',
    height: '40%',
    width: '80%',
  },

  link: {
    fontSize: 18,
    color: config.secondaryColor,
    fontWeight: 'bold',
    padding: 8,
    margin: -8,
  },

  checkbox: {
    padding: 5,
    margin: 5,
    borderColor: config.tertiaryColor,
  },

  hidden: {
    display: 'none',
  },
});

export default stylesMain;
