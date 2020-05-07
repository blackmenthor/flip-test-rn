import React from 'react';
import Modal from 'react-native-modal';

const DefaultModal = ({onClose, isVisible, children}) => {
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      transparent={true}
      isVisible={isVisible}>
      {children}
    </Modal>
  );
};

export default DefaultModal;
