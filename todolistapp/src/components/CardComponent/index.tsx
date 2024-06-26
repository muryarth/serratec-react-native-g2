import { View, Text } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { CardHeader } from "./CardHeader";
import CardFooter from "./CardFooter";

interface CardProps {
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
  removeDisabled?: boolean;
  removeVisible?: boolean;
  handleRemovePress?: () => void;
  width?: number | `${number}%` | "auto";
  height?: number | `${number}%` | "auto";
  title: string;
  content: string;
  date: string;
  color?: string;
}

const Card = ({
  editDisabled,
  editVisible,
  handleEditPress = () => {},
  pinDisabled,
  pinVisible,
  handlePinPress = () => {},
  favoriteDisabled,
  favoriteVisible,
  handleFavoritePress = () => {},
  removeDisabled,
  removeVisible,
  handleRemovePress = () => {},
  width = "100%",
  height = "auto",
  title,
  content,
  date,
  pinned = false,
  favorited = false,
  color = "#afeeee",
}: CardProps) => {
  const [showText, setShowText] = useState<boolean>(false);

  const toggleShowText = () => setShowText(!showText);

  return (
    <View style={[styles.cardContainer, { backgroundColor: color }]}>
      <CardHeader
        title={title}
        removeDisabled={removeDisabled}
        removeVisible={removeVisible}
        handleRemovePress={handleRemovePress}
      />

      <Text
        style={[styles.cardContent, { width: width, height: height }]}
        numberOfLines={showText ? 0 : 4}
        ellipsizeMode="tail"
      >
        {content}
      </Text>

      <CardFooter
        date={date}
        content={content}
        length={153}
        showText={showText}
        pinned={pinned}
        pinDisabled={pinDisabled}
        pinVisible={pinVisible}
        favorited={favorited}
        favoriteDisabled={favoriteDisabled}
        favoriteVisible={favoriteVisible}
        editDisabled={editDisabled}
        editVisible={editVisible}
        handlePinPress={handlePinPress}
        handleFavoritePress={handleFavoritePress}
        handleEditPress={handleEditPress}
        toggleShowText={toggleShowText}
      />
    </View>
  );
};

export { Card };
