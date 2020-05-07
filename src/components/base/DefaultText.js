import React from 'react';
import {Text, StyleSheet} from 'react-native';

/**
 * A Text with default styling.
 * @requires {String} text
 * @param {Style} style (if additional styling is needed).
 *
 * Default configuration:
 * - fontSize: 16
 */
const DefaultText = ({text, style}) => {
  return <Text style={[styles.textStyle, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
  },
});

export default DefaultText;
