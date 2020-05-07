import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import * as ColorPalette from '../../utils/ColorPalette';
import DefaultText from './DefaultText';

/**
 * A TouchableOpacity with centered text and fixed padding.
 * @requires {String} title
 * @requires {Callback} onPress
 * @param {Color} backgroundColor (defaults to COLOR_PRIMARY)
 */
const DefaultButton = ({title, onPress, backgroundColor}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles(backgroundColor).buttonStyle}>
        <DefaultText style={styles(backgroundColor).textStyle} text={title} />
      </View>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  backgroundColor: ColorPalette.COLOR_PRIMARY,
};

const styles = backgroundColor =>
  StyleSheet.create({
    buttonStyle: {
      backgroundColor: backgroundColor,
      paddingHorizontal: 24,
      paddingVertical: 8,
      borderRadius: 4,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default DefaultButton;
