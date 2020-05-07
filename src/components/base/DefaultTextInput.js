import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import * as ColorPalette from '../../utils/ColorPalette';

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
    fontSize: 15,
  },
});

export default DefaultTextInput;
