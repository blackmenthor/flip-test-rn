import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Row from '../../../../components/base/Row';
import DefaultTextInput from '../../../../components/base/DefaultTextInput';
import FilterText from './FilterText';
import * as ColorPalette from '../../../../utils/ColorPalette';

const SearchBar = ({onTermChanged, onFilterTap, currentFilter}) => {
  return (
    <Row style={styles.backgroundStyle}>
      <Icon
        name="search"
        style={styles.iconStyle}
        color={ColorPalette.SOFT_GREY}
      />
      <DefaultTextInput
        placeholder="Cari nama, bank, atau nominal."
        onChangeText={onTermChanged}
      />
      <FilterText text={currentFilter} onFilterTap={onFilterTap} />
    </Row>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
  iconStyle: {
    fontSize: 24,
    alignSelf: 'center',
  },
});

export default SearchBar;
