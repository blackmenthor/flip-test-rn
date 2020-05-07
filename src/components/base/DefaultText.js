import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DefaultText = ({text, style}) => {
  return <Text style={[styles.textStyle, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
  },
});

export default DefaultText;
