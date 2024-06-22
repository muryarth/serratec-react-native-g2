import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./style";
import { useState } from "react";

interface CardProps {
  cardTitle: string;
  cardBody: string;
}

const Card = ({
  cardTitle = "Título",
  cardBody = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia eveniet voluptatum, facere tempora officia facilis dolores, sit, deserunt esse repellat? Commodi ab cumque nostrum necessitatibus expedita perferendis consequatur unde?",
}: CardProps) => {
  const [showText, setShowText] = useState<boolean>(false);

  const toggleShowText = () => setShowText (!showText);

  return (
    <View style={style.cardContainer}>
      <Text style={style.cardTitle}>{cardTitle}</Text>
      <Text style={style.cardBody} numberOfLines={showText? 0 : 4} ellipsizeMode="tail">
        {cardBody}
      </Text>
      <TouchableOpacity onPress = {toggleShowText}>

        <Text style={{ fontWeight: "bold" }}>{showText? "Ver Menos" : "Ver Mais"}</Text>

      </TouchableOpacity>
    </View>
  );
};

export default Card;
