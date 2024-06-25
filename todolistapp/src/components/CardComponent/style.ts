import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    elevation: 9,
  },

  cardContent: {
    paddingHorizontal: 15,
    lineHeight: 30,
    minHeight: 120,
    fontSize: 16,
    textAlign: "justify",
    paddingVertical: 21,
  },
});
