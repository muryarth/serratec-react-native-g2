import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface ButtonProps {
  titulo: string;
  customOnPress?: () => void;
  color?: string;
}

const DefaultAppButton = ({
  titulo,
  customOnPress,
  color = "#ccc",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.defaultAppButton, {backgroundColor: color}]}
      onPress={customOnPress}
    >
      <Text>{titulo}</Text>
    </TouchableOpacity>
  );
};

export { DefaultAppButton };
