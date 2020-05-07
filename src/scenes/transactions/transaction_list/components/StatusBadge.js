import React from 'react';
import {Text, StyleSheet} from 'react-native';
import DefaultText from '../../../../components/base/DefaultText';
import * as ColorPalette from '../../../../utils/ColorPalette';

const StatusBadge = ({status}) => {
  var title;
  var style;
  switch (status) {
    case 'SUCCESS':
      title = 'Berhasil';
      style = styles.successStyle;
      break;
    case 'PENDING':
      title = 'Pengecekan';
      style = styles.pendingStyle;
      break;
    case 'FAILED':
      title = 'Gagal';
      style = styles.failedStyle;
      break;
    default:
      title = 'Pengecekan';
      style = styles.pendingStyle;
      break;
  }
  return <DefaultText style={[styles.statusTextStyle, style]} text={title} />;
};

const styles = StyleSheet.create({
  statusTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  pendingStyle: {
    borderWidth: 1.5,
    borderColor: ColorPalette.COLOR_PRIMARY,
  },
  successStyle: {
    backgroundColor: ColorPalette.SUCCESS,
    color: 'white',
  },
  failedStyle: {
    borderWidth: 1.5,
    borderColor: ColorPalette.FAILED,
  },
});

export default StatusBadge;
