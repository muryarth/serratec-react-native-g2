import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { width } from "@fortawesome/free-solid-svg-icons/faAngleUp";

interface ButtonProps {
  title: string;
  customOnPress?: () => void;
  style?: {};
}

const DefaultAppButton = ({ title, customOnPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.defaultAppButton, { ...style }]}
      onPress={customOnPress}
    >
      <Text style={styles.defaultAppButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export { DefaultAppButton };
