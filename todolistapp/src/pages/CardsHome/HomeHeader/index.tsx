import { View, Text } from "react-native";
import { styles } from "./style";

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Bem vindo! </Text>
    </View>
  );
};

export { HomeHeader };
