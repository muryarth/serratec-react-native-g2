import { View, Text } from "react-native";
import { styles } from "./style";
import { useAuth } from "../../../hooks/useAuth";

const FavoritesHeader = () => {
  const { email } = useAuth();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{email} </Text>
      <Text style={styles.headerText}>Bem vindo! </Text>
    </View>
  );
};

export { FavoritesHeader };
