import { TouchableOpacity, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PressableIconProps {
  onPress: () => void;
  icon: IconDefinition;
  size?: number;
  color?: string;
}

const PressableIcon = ({
  color,
  size = 20,
  icon,
  onPress,
}: PressableIconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon color={color} size={size} icon={icon} />
    </TouchableOpacity>
  );
};

export default PressableIcon;
