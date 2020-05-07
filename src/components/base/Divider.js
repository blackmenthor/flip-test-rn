import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as ColorPalette from '../../utils/ColorPalette';

const Divider = ({style}) => {
  return <View style={[style, styles.dividerStyle]} />;
};

const styles = StyleSheet.create({
  dividerStyle: {
    height: 0.3,
    backgroundColor: ColorPalette.DARK_GREY,
    marginHorizontal: -16,
    marginBottom: 16,
  },
});

export default Divider;
