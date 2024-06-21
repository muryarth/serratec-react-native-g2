import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface ButtonProps {
  titulo: string;
  customOnPress: () => void;
  tamanho?: number;
  largura?: number | string;
}

const DefaultAppButton = ({
  titulo,
  customOnPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.defaultAppButton}
      onPress={customOnPress}
    >
      <Text>{titulo}</Text>
    </TouchableOpacity>
  );
};

export { DefaultAppButton };
