import React from 'react';
import {View, StyleSheet} from 'react-native';

/**
 * A View container with vertical alignment.
 * @requires {Widget} children
 * @requires {Style} style
 *
 * Default configuration:
 * - alignItems: flex-start
 */
const Column = ({children, style}) => {
  return <View style={[styles.columnStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  columnStyle: {
    alignItems: 'flex-start',
  },
});

export default Column;
