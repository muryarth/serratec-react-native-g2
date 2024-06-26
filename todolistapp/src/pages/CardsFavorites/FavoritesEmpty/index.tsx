import { View, Text } from "react-native";
import { styles } from "./style";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { PressableIcon } from "../../../components/PressableIcon";
import { useNavigation } from "@react-navigation/native";

const FavoritesEmpty = () => {
  const navigator = useNavigation();

  const handleNavigation = () => {
    navigator.navigate("DrawerCards", { name: "DrawerCards" });
  };

  return (
    <View style={styles.favoritesEmptyContainer}>
      <Text style={styles.favoritesEmptyText}>
        Você não tem lembretes favoritados.
      </Text>
      <PressableIcon
        style={styles.favoritesIcon}
        icon={faStar}
        onPress={handleNavigation}
      />
    </View>
  );
};

export { FavoritesEmpty };
