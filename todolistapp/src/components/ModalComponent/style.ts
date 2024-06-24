import { StyleSheet } from "react-native";

export const modalStyle = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    backgroundColor: "#afeeee",
    width: 300,
    height: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

  },

  modalTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  modalButton: {
    paddingTop: 10,
    width: 50,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    
  },

  modalButtonText: {
    color: "black",
    fontSize: 15,
    textAlign:"center",
  },
});