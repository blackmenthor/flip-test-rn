import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Column from './base/Column';
import DefaultText from './base/DefaultText';
import CommonStyles from '../utils/CommonStyles';

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
  onEmptyText: 'Tidak ada data tersedia',
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
