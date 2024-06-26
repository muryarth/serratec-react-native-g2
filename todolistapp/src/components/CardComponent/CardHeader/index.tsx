import { View, Text } from "react-native";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { PressableIcon } from "../../PressableIcon";
import { styles } from "./style";

interface CardHeadeProps {
  removeDisabled?: boolean;
  removeVisible?: boolean;
  pinned?: boolean;
  title: string;
  favorited?: boolean;
  handleRemovePress: () => void;
}

const CardHeader = ({
  removeDisabled,
  removeVisible,
  title,
  handleRemovePress,
}: CardHeadeProps) => {
  return (
    <View style={styles.cardHeaderContainer}>
      <Text style={styles.cardHeaderTitle}>{title}</Text>

      <View style={styles.cardHeaderAbsolute}>
        <PressableIcon
          style={styles.cardHeaderOffsetPressable}
          visible={removeVisible}
          disabled={removeDisabled}
          color="white"
          size={15}
          icon={faXmark}
          onPress={handleRemovePress}
        />
      </View>
    </View>
  );
};

export { CardHeader };
