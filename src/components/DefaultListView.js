import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CommonStyles from '../utils/CommonStyles';
import Strings from '../localization/Strings';
import Column from './base/Column';
import DefaultText from './base/DefaultText';

/**
 * A FlatList widget that will show Empty text if there are no items in the supplied list.
 * @requires {List} items
 * @requires {Callback(item)} keyExtractor
 * @requires {Callback(item)} renderItem
 * @param {String} onEmptyText (Will be rendered in case of empty list supplied)
 *
 * Default configuration:
 * - OnEmptyText: 'Tidak ada data tersedia'
 * - FlatList's vertical margin: 8
 */
const DefaultListView = ({items, keyExtractor, renderItem, onEmptyText}) => {
  if (items.length === 0) {
    return (
      <Column style={styles.columnStyle}>
        <DefaultText style={[CommonStyles.h1]} text={onEmptyText} />
      </Column>
    );
  }

  return (
    <FlatList
      style={styles.flatListStyle}
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

DefaultListView.defaultProps = {
  onEmptyText: Strings['Common.DefaultEmptyText'],
};

const styles = StyleSheet.create({
  columnStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListStyle: {
    marginVertical: 8,
  },
});

export default DefaultListView;
