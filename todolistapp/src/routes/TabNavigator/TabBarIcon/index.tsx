import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { View, Text } from "react-native";
import { styles } from "./style";

interface TabBarIconProps {
  title?: string;
  icon: IconDefinition;
  color?: string;
  iconSize?: number;
}

function TabBarIcon({ title, icon, color }: TabBarIconProps) {
  return (
    <View style={styles.tabBarIconContainer}>
      <FontAwesomeIcon color={color} icon={icon} size={28} />
      <Text style={[styles.tabBarIconText, { color: color }]}>{title}</Text>
    </View>
  );
}

export { TabBarIcon };
