import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginVertical: 5,
    marginHorizontal: 50,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    elevation: 9,
  },

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

  cardContent: {
    fontSize: 15,
    textAlign: "justify",
    paddingVertical: 8,
  },
});
