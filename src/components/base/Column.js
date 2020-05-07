import React from 'react';
import {View, StyleSheet} from 'react-native';

const Column = ({children, style}) => {
  return <View style={[styles.columnStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  columnStyle: {
    alignItems: 'flex-start',
  },
});

export default Column;
