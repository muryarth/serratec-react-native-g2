import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  homeEmptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  homeEmptyText: {
    fontSize: 16,
    fontWeight: "400",
  },

  homeIcon: {
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
