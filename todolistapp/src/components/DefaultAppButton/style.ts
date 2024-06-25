import { StyleSheet } from "react-native";
import { DefaultAppButton } from ".";

const styles = StyleSheet.create({
  defaultAppButton: {
    backgroundColor: "#ffffff",
    alignItems: "center", // Alinha horizontalmente
    justifyContent: "center", // Alinha verticalmente
    width: "50%",
    height: 40,
    marginVertical: 15,
    borderRadius: 50,
    borderColor: "#919191",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  defaultAppButtonText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export { styles };
