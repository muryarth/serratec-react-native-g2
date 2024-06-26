import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardFooterContainer: {
    width: "100%",
    alignItems: "center",
    height: 55,
    gap: 5,
  },

  cardFooterDateText: {
    textAlign: "center",
    fontWeight: "500",
    color: "#474747",
  },

  cardFooterAbsolute: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  cardFooterOffest: {
    flexDirection: "row",
    alignSelf: "flex-end",
    top: 10,
    left: 10,
    gap: 5,
  },

  cardFooterPressable: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderRadius: 100,
    backgroundColor: "#183153",
    height: 28,
    width: 28,
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
