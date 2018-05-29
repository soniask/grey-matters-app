import React from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
  },
  page: {
    width: Dimensions.get('window').width,
    padding: 20,
    fontSize: 17,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    position: 'absolute',
    top: 0,
  },
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  story: {
    marginTop: Dimensions.get('window').height / 2,
  }
})

export default styles;
