import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardHeaderContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },

  cardHeaderTitle: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 19,
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
    alignItems: "center",
    flexDirection: "row",
    gap: 9,
  },
});

export { styles };
