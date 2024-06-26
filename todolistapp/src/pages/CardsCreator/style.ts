import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardTitle: {
    backgroundColor: "#c6f5f5",
    width: "80%",
    textAlign: "center",
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontSize: 18,
    fontWeight: "bold",
  },

  cardDescriptionContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 45,
  },

  cardDescriptionPlaceholderContainer: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    paddingTop: 5,
  },

  cardDescriptionPlaceholderText: {
    color: "#2E2E2E",
    fontSize: 15,
    fontWeight: "400",
  },

  cardCreatorButtonsGroup: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 8,
  },

  cardCreatorButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    height: 40,
    width: 40,
    borderRadius: 300,
    borderWidth: 1.5,
  },
});
