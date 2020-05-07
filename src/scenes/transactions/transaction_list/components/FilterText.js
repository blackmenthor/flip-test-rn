import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as ColorPalette from '../../../../utils/ColorPalette';
import Strings from '../../../../localization/Strings';
import Row from '../../../../components/base/Row';
import DefaultText from '../../../../components/base/DefaultText';

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
  text: Strings['TransactionSort.DefaultLabel'],
};

const styles = StyleSheet.create({
  sortStyle: {
    fontWeight: 'bold',
    color: ColorPalette.COLOR_PRIMARY,
  },
});

export default FilterText;
