import { TouchableOpacity, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PressableIconProps {
  onPress: () => void;
  icon: IconDefinition;
  size?: number;
  color?: string;
  style?: {};
}

const PressableIcon = ({
  color,
  size = 20,
  icon,
  style,
  onPress,
}: PressableIconProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <FontAwesomeIcon color={color} size={size} icon={icon} />
    </TouchableOpacity>
  );
};

export { PressableIcon };
