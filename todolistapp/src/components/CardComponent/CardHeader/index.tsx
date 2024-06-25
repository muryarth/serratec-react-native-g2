import { View, Text } from "react-native";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons/faThumbtack";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons/faStar";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons/faStar";
import { PressableIcon } from "../../PressableIcon";
import { styles } from "./style";

interface CardHeadeProps {
  title: string;
  favorited?: boolean;
  handlePinPress: () => void;
  handleFavoritePress: () => void;
  handleRemovePress: () => void;
}

const CardHeader = ({
  title,
  favorited,
  handleFavoritePress,
  handlePinPress,
  handleRemovePress,
}: CardHeadeProps) => {
  return (
    <View style={styles.cardHeaderContainer}>
      <Text style={styles.cardHeaderTitle}>{title}</Text>

      <View style={styles.cardHeaderButtons}>
        <View style={styles.cardHeaderButtonsLeft}>
          <PressableIcon
            size={20}
            color={favorited ? "#ffe716" : "#000"}
            icon={favorited ? faStarSolid : faStarRegular}
            onPress={handleFavoritePress}
          />
          <PressableIcon
            size={18}
            icon={faThumbtack}
            onPress={handlePinPress}
          />
        </View>

        <PressableIcon
          color="red"
          size={20}
          icon={faXmark}
          onPress={handleRemovePress}
        />
      </View>
    </View>
  );
};

export { CardHeader };
