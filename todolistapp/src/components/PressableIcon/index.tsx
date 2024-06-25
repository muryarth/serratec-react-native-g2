import { TouchableOpacity, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PressableIconProps {
  disabled?: boolean;
  onPress: () => void;
  icon: IconDefinition;
  size?: number;
  color?: string;
  style?: {};
}

const PressableIcon = ({
  disabled = false,
  color,
  size = 20,
  icon,
  style,
  onPress,
}: PressableIconProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      <FontAwesomeIcon color={color} size={size} icon={icon} />
    </TouchableOpacity>
  );
};

export { PressableIcon };
