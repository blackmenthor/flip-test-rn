import React from 'react';
import {StyleSheet} from 'react-native';
import DefaultModal from '../../../../components/base/DefaultModal';
import Column from '../../../../components/base/Column';
import * as ColorPalette from '../../../../utils/ColorPalette';
import RadioForm from 'react-native-simple-radio-button';
import {SORT_STATES} from '../../../../context/transactions/TransactionSortState';

const SortModal = ({
  currentSelected,
  onClose,
  isVisible,
  onNewStateClicked,
}) => {
  return (
    <DefaultModal onClose={onClose} isVisible={isVisible}>
      <Column style={styles.modalStyle}>
        <RadioForm
          radio_props={SORT_STATES}
          initial={currentSelected}
          onPress={newIdx => onNewStateClicked(SORT_STATES[newIdx])}
          buttonColor={ColorPalette.COLOR_PRIMARY}
        />
      </Column>
    </DefaultModal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 36,
  },
});

export default SortModal;
