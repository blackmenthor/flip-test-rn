import React from 'react';
import {StyleSheet} from 'react-native';
import * as ColorPalette from '../../../../utils/ColorPalette';
import Strings from '../../../../localization/Strings';
import DefaultText from '../../../../components/base/DefaultText';

const StatusBadge = ({status}) => {
  var title;
  var style;
  switch (status) {
    case 'SUCCESS':
      title = Strings['TransactionStatus.SuccessTitle'];
      style = styles.successStyle;
      break;
    case 'PENDING':
      title = Strings['TransactionStatus.PendingTitle'];
      style = styles.pendingStyle;
      break;
    case 'FAILED':
      title = Strings['TransactionStatus.FailedTitle'];
      style = styles.failedStyle;
      break;
    case 'CANCELLED':
      title = Strings['TransactionStatus.CancelledTitle'];
      style = styles.cancelledStyle;
      break;
    default:
      title = Strings['TransactionStatus.PendingTitle'];
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
  cancelledStyle: {
    backgroundColor: ColorPalette.DARK_GREY,
    color: 'white',
  },
  failedStyle: {
    borderWidth: 1.5,
    borderColor: ColorPalette.FAILED,
  },
});

export default StatusBadge;
