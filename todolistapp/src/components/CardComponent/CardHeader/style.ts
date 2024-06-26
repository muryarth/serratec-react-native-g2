import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardHeaderContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  cardHeaderTitle: {
    paddingTop: 14,
    paddingBottom: 4,
    borderBottomColor: "#414141",
    borderBottomWidth: 0.9,
    textAlign: "center",
    fontSize: 19,
    color: "#414141",
    width: "90%",
  },

  cardHeaderAbsolute: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  cardHeaderOffsetPressable: {
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderRadius: 100,
    backgroundColor: "#183153",
    height: 28,
    width: 28,
    top: -10,
    right: -10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    elevation: 9,
  },
});

export { styles };
