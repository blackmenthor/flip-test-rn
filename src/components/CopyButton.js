import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import * as ColorPalette from '../utils/ColorPalette';
import Strings from '../localization/Strings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-community/clipboard';
import Snackbar from 'react-native-snackbar';

/**
 * A clickable Icon that would copy the supplied parameters to device's clipboard.
 * @requires {String} textToCopy
 *
 * Default configuration:
 * - transform: [{rotateY: '180deg'}] (Copy icon will be mirrored)
 * - Icon's horizontal margin: 8
 */
const CopyButton = ({textToCopy}) => {
  const copyToClipBoard = text => Clipboard.setString(text);

  return (
    <TouchableOpacity
      onPress={() => {
        copyToClipBoard(textToCopy);
        Snackbar.show({
          text: Strings['Common.Copy'],
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
