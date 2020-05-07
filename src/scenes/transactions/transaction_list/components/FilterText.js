import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Row from '../../../../components/base/Row';
import DefaultText from '../../../../components/base/DefaultText';
import * as ColorPalette from '../../../../utils/ColorPalette';

const FilterText = ({text, onFilterTap}) => {
  return (
    <Row>
      <TouchableOpacity onPress={onFilterTap}>
        <DefaultText style={styles.sortStyle} text={text} />
      </TouchableOpacity>
      <Icon name="chevron-down" size={30} color={ColorPalette.COLOR_PRIMARY} />
    </Row>
  );
};

FilterText.defaultProps = {
  text: 'URUTKAN',
};

const styles = StyleSheet.create({
  sortStyle: {
    fontWeight: 'bold',
    color: ColorPalette.COLOR_PRIMARY,
  },
});

export default FilterText;
