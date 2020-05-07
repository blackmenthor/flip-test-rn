import React from 'react';
import Modal from 'react-native-modal';

/**
 * A Modal with default configuration.
 * @requires {Callback} onClose
 * @requires {boolean} isVisible
 * @requires {Widget} children
 *
 * Default configuration:
 * - animationIn: slideInUp
 * - animationOut: slideOutDown
 * - transparent: true
 */
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
