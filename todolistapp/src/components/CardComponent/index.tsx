import { View, Text } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons/faThumbtack";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons/faStar";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons/faStar";
import PressableIcon from "../PressableIcon";

interface CardProps {
  favorited?: boolean;
  color?: string;
  cardTitle: string;
  cardContent: string;
}

const Card = ({
  favorited = false,
  color = "#afeeee",
  cardTitle = "Título",
  cardContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia eveniet voluptatum, facere tempora officia facilis dolores, sit, deserunt esse repellat? Commodi ab cumque nostrum necessitatibus expedita perferendis consequatur unde?",
}: CardProps) => {
  const [showText, setShowText] = useState<boolean>(false);

  // Motra/Esconde o texto do card
  const toggleShowText = () => setShowText(!showText);

  return (
    <View style={[styles.cardContainer, { backgroundColor: color }]}>
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
        <Text style={styles.cardTitle}>{cardTitle}</Text>

        <View style={styles.cardHeaderButtons}>
          <View style={styles.cardHeaderButtonsLeft}>
            <PressableIcon
              size={25}
              color={favorited ? "#ffe716" : "#000"}
              icon={favorited ? faStarSolid : faStarRegular}
              onPress={() => {}}
            />
            <PressableIcon size={25} icon={faThumbtack} onPress={() => {}} />
          </View>

          <PressableIcon
            color="red"
            size={25}
            icon={faXmark}
            onPress={() => {}}
          />
        </View>
      </View>

      <Text
        style={[styles.cardContent, { minHeight: 80 }]}
        numberOfLines={showText ? 0 : 4}
        ellipsizeMode="tail"
      >
        {cardContent}
      </Text>

      <View>
        {cardContent.length > 180 && (
          <PressableIcon
            icon={showText ? faAngleUp : faAngleDown}
            onPress={toggleShowText}
          />
        )}
      </View>
    </View>
  );
};

export default Card;
