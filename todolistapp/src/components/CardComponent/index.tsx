import { View, Text } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { CardHeader } from "./CardHeader";
import { PressableIcon } from "../PressableIcon";

interface CardProps {
  title: string;
  content: string;
  date: string;
  favorited?: boolean;
  color?: string;
}

const Card = ({
  favorited = false,
  color = "#afeeee",
  title = "Título",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia eveniet voluptatum, facere tempora officia facilis dolores, sit, deserunt esse repellat? Commodi ab cumque nostrum necessitatibus expedita perferendis consequatur unde?",
}: CardProps) => {
  const [showText, setShowText] = useState<boolean>(false);

  // Motra/Esconde o texto do card
  const toggleShowText = () => setShowText(!showText);

  return (
    <View style={[styles.cardContainer, { backgroundColor: color }]}>
      <CardHeader title={title} />

      <Text
        style={[styles.cardContent, { minHeight: 80 }]}
        numberOfLines={showText ? 0 : 4}
        ellipsizeMode="tail"
      >
        {content}
      </Text>

      <View>
        {content.length > 180 && (
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
