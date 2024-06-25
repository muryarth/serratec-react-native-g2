import { View, Text, Modal, Alert } from "react-native";
import React, { useState } from "react";
import { modalStyle } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DefaultAppButton } from "../DefaultAppButton";
import { width } from "@fortawesome/free-solid-svg-icons/faAngleUp";

interface ModalComponentProps {
  visible: boolean;
  handleClose: () => void;
  modalTitle: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  handleClose,
  modalTitle,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <TouchableOpacity style={modalStyle.modalPressable} onPress={handleClose}>
        <View style={modalStyle.modalCard}>
          <Text style={modalStyle.modalTitle}>{modalTitle}</Text>

          <DefaultAppButton
            title={"Ok"}
            style={{ width: "30%" }}
            customOnPress={handleClose}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export { ModalComponent };
