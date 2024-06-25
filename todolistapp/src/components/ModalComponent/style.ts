import { StyleSheet } from "react-native";

export const modalStyle = StyleSheet.create({
  modalPressable: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  modalCard: {
    backgroundColor: "#afeeee",
    width: "90%",
    height: "20%",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 5,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalTitle: {
    paddingTop: 15,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  modalButton: {
    paddingTop: 10,
    width: 90,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 100,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalButtonText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
  },

  modalFooter: {
    width: "100%",
  },
});
