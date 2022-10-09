import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the home screen
const styles = StyleSheet.create({
  contentHeader: {
    width: '100%',
    height: 50,
    backgroundColor: config.tertiaryColor,
    color: config.primaryTextColor,
    alignItems: 'center',
    borderRadius: 5,
  },

  contentHeaderText: {
    fontSize: 32,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },

  itemList: {
    maxHeight: '88%',
  },
});

export default styles;
