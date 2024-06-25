import { View, Text } from "react-native";
import { styles } from "./style";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { PressableIcon } from "../../../components/PressableIcon";
import { useNavigation } from "@react-navigation/native";

const HomeEmpty = () => {
  const navigator = useNavigation();

  const handleNavigation = () => {
    navigator.navigate("TabsCardCreator", { name: "Criar" });
  };

  return (
    <View style={styles.homeEmptyContainer}>
      <Text style={styles.homeEmptyText}>Você não tem lembretes.</Text>
      <PressableIcon
        style={styles.homeIcon}
        icon={faPlus}
        onPress={handleNavigation}
      />
    </View>
  );
};

export { HomeEmpty };
