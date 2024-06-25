import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardTitle: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 23,
    width: "60%",
  },

  cardHeaderButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    height: 33,
    width: "100%",
  },

  cardHeaderButtonsLeft: {
    flexDirection: "row",
    gap: 9,
  },
});

export { styles };