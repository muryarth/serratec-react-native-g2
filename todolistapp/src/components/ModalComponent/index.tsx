import { View, Text, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { modalStyle } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ModalComponentProps{
    visible: boolean;
    handleClose: () => void
    modalTitle: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({visible, handleClose, modalTitle}) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <View style={modalStyle.modal}>
        <View style={modalStyle.modalContainer}>
          <Text style={modalStyle.modalTitle}>{modalTitle}</Text>
          <TouchableOpacity
            onPress={handleClose}
            style={modalStyle.modalButton}
          >
            <Text style={modalStyle.modalButtonText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export {ModalComponent}