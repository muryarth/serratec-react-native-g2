import { View, Text } from "react-native";
import { styles } from "./style";
import { PressableIcon } from "../../PressableIcon";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons/faThumbtack";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons/faStar";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons/faStar";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";

interface CardFooterProps {
  editDisabled?: boolean;
  editVisible?: boolean;
  handleEditPress?: () => void;
  pinned?: boolean;
  pinDisabled?: boolean;
  pinVisible?: boolean;
  handlePinPress?: () => void;
  favorited?: boolean;
  favoriteDisabled?: boolean;
  favoriteVisible?: boolean;
  handleFavoritePress?: () => void;
  date: string;
  content: string;
  length: number;
  showText: boolean;
  toggleShowText: () => void;
}

const CardFooter = ({
  editDisabled,
  editVisible,
  handleEditPress = () => console.log("Pressed!"),
  pinned = false,
  pinDisabled,
  pinVisible,
  handlePinPress = () => console.log("Pressed!"),
  favorited = false,
  favoriteDisabled,
  favoriteVisible,
  handleFavoritePress = () => console.log("Pressed!"),
  date,
  content,
  length,
  showText,
  toggleShowText,
}: CardFooterProps) => {
  return (
    <View style={styles.cardFooterContainer}>
      <Text style={styles.cardFooterDateText}>{date}</Text>
      {content.length > length && (
        <PressableIcon
          size={20}
          icon={showText ? faAngleUp : faAngleDown}
          onPress={toggleShowText}
        />
      )}

      <View style={styles.cardFooterAbsolute}>
        <View style={styles.cardFooterOffest}>
          <PressableIcon
            style={styles.cardFooterPressable}
            visible={editVisible}
            disabled={editDisabled}
            size={14}
            color={"white"}
            icon={faPen}
            onPress={handleEditPress}
          />
          <PressableIcon
            style={styles.cardFooterPressable}
            visible={favoriteVisible}
            disabled={favoriteDisabled}
            size={16}
            color={favorited ? "orange" : "white"}
            icon={favorited ? faStarSolid : faStarRegular}
            onPress={handleFavoritePress}
          />
          <PressableIcon
            style={styles.cardFooterPressable}
            visible={pinVisible}
            disabled={pinDisabled}
            color={pinned ? "#e908f5" : "white"}
            size={14}
            icon={faThumbtack}
            onPress={handlePinPress}
          />
        </View>
      </View>
    </View>
  );
};

export default CardFooter;
