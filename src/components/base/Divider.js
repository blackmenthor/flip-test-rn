import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as ColorPalette from '../../utils/ColorPalette';

/**
 * A View for dividing widgets.
 * @param {Style} style (if additional styling is needed).
 *
 * Default configuration:
 * - height: 0.3
 * - backgroundColor: DARK_GREY
 * - marginHorizontal: -16 (To cancel out parents padding if needed)
 * - marginBottom: 16
 */
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
