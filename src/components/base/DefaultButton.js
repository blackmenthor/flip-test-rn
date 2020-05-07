import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import * as ColorPalette from '../../utils/ColorPalette';
import DefaultText from './DefaultText';

const DefaultButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonStyle}>
        <DefaultText style={styles.textStyle} text={title} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: ColorPalette.COLOR_PRIMARY,
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
