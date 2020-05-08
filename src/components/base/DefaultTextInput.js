import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import * as ColorPalette from '../../utils/ColorPalette';

/**
 * A TextInput with default styling.
 * @requires {Callback} onChangeText
 * @requires {String} placeholder
 * @param {bool} autoCorrect
 * @param {String} autoCapitalize
 * @param {Style} style (if additional styling is needed).
 *
 * Default configuration:
 * - fontSize: 15
 * - flex: 1
 * - autoCorrect: false
 * - autoCapitalize: 'none'
 * - placeholderTextColor: SOFT_GREY
 */
const DefaultTextInput = ({
  placeholder,
  onChangeText,
  value,
  autoCorrect,
  autoCapitalize,
  style,
  placeholderTextColor,
}) => {
  return (
    <TextInput
      style={[styles.inputStyle, style]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

DefaultTextInput.defaultProps = {
  autoCorrect: false,
  autoCapitalize: 'none',
  placeholderTextColor: ColorPalette.SOFT_GREY,
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
  },
});

export default DefaultTextInput;
