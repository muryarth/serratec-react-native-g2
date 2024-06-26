import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  favoritesEmptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  favoritesEmptyText: {
    fontSize: 16,
    fontWeight: "400",
  },

  favoritesIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    height: 40,
    width: 40,
    borderRadius: 300,
    borderWidth: 1.5,
  },
});

export { styles };
