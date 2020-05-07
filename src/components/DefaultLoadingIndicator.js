import React from 'react';
import {DotIndicator} from 'react-native-indicators';
import * as ColorPalette from '../utils/ColorPalette';

/**
 * A Default Loading indicator with DotIndicator.
 */
const DefaultLoadingIndicator = () => {
  return <DotIndicator color={ColorPalette.COLOR_PRIMARY} count={3} />;
};

export default DefaultLoadingIndicator;
