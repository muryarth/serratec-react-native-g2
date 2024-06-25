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
}

const CardHeader = ({ title, favorited }: CardHeadeProps) => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        paddingHorizontal: 10,
      }}
    >
      <Text style={styles.cardTitle}>{title}</Text>

      <View style={styles.cardHeaderButtons}>
        <View style={styles.cardHeaderButtonsLeft}>
          <PressableIcon
            size={20}
            color={favorited ? "#ffe716" : "#000"}
            icon={favorited ? faStarSolid : faStarRegular}
            onPress={() => {}}
          />
          <PressableIcon
            size={20}
            // color="blue"
            icon={faThumbtack}
            onPress={() => {}}
          />
        </View>

        <PressableIcon
          color="red"
          size={20}
          icon={faXmark}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export { CardHeader };
