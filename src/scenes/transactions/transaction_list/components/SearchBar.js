import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as ColorPalette from '../../../../utils/ColorPalette';
import Strings from '../../../../localization/Strings';
import Row from '../../../../components/base/Row';
import DefaultTextInput from '../../../../components/base/DefaultTextInput';
import FilterText from './FilterText';

const SearchBar = ({onTermChanged, onFilterTap, currentFilter}) => {
  return (
    <Row style={styles.backgroundStyle}>
      <Icon
        name="search"
        style={styles.iconStyle}
        color={ColorPalette.SOFT_GREY}
      />
      <DefaultTextInput
        placeholder={Strings['SearchBar.Placeholder']}
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
    marginTop: 8,
  },
  iconStyle: {
    fontSize: 24,
    alignSelf: 'center',
  },
});

export default SearchBar;
