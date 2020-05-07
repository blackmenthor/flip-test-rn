import React from 'react';
import {View, StyleSheet} from 'react-native';

const Row = ({children, style}) => {
  return <View style={[style, styles.rowStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Row;
