import { TouchableOpacity, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PressableIconProps {
  onPress: () => void;
  icon: IconDefinition;
  disabled?: boolean;
  visible?: boolean;
  size?: number;
  color?: string;
  style?: {};
}

const PressableIcon = ({
  visible = true,
  disabled = false,
  color,
  size = 20,
  icon,
  style,
  onPress,
}: PressableIconProps) => {
  return (
    <>
      {visible && (
        <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
          <FontAwesomeIcon
            color={disabled ? "gray" : color}
            size={size}
            icon={icon}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export { PressableIcon };
