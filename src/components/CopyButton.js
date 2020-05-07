import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import * as ColorPalette from '../utils/ColorPalette';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-community/clipboard';
import Snackbar from 'react-native-snackbar';

const CopyButton = ({textToCopy}) => {
  const copyToClipBoard = text => Clipboard.setString(text);

  return (
    <TouchableOpacity
      onPress={() => {
        copyToClipBoard(textToCopy);
        Snackbar.show({
          text: 'ID Transaksi berhasil disalin!',
          duration: Snackbar.LENGTH_SHORT,
        });
      }}>
      <Icon
        name="content-copy"
        color={ColorPalette.COLOR_PRIMARY}
        size={18}
        style={styles.iconCopyStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconCopyStyle: {
    transform: [{rotateY: '180deg'}],
    marginHorizontal: 8,
  },
});

export default CopyButton;
