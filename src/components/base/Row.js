import React from 'react';
import {View, StyleSheet} from 'react-native';

/**
 * A View container with horizontal alignment.
 * @requires {Widget} children
 * @requires {Style} style
 *
 * Default configuration:
 * - alignItems: center
 * - flexDirection: row
 */
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
