import axios from "axios";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/CardComponent";
import { Card as CardProps } from "../../types";
import { styles } from "./style";
import { PressableIcon } from "../../components/PressableIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [cards, setCards] = useState<CardProps>([]);
  const navigator = useNavigation();

  const cores = ["#c6f5f5", "#dcfcfc", "#99d5d5", "#82bbbb"];

  const coresCardContraste = [
    "#FFD700",
    "#00FF00",
    "#00CED1",
    "#1E90FF",
    "#FF69B4",
    "#ADFF2F",
    "#32CD32",
    "#40E0D0",
    "#FF7F50",
  ];

  const handleNavigation = () => {
    navigator.navigate("TabsCardCreator");
  };

  const generateRandomKey = (range: number, lastKey?: number): number => {
    const number = Math.floor(Math.random() * range);
    return number !== lastKey ? number : generateRandomKey(range, lastKey);
  };

  const setRandomCardColors = (cards: CardProps, colors: string[]) => {
    let lastKey = colors.length;
    const coloredCards = cards.map((card) => {
      const key = generateRandomKey(colors.length, lastKey);
      lastKey = key;
      card.color = colors[key];
      return card;
    });
    setCards(coloredCards);
  };

  const getCards = async () => {
    axios
      .get("https://6674c60975872d0e0a977f85.mockapi.io/lembrete")
      .then((response) => setRandomCardColors(response.data, cores))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <FlatList
        ListEmptyComponent={
          <View style={styles.homeEmptyContainer}>
            <Text style={styles.homeEmptyText}>Você não tem lembretes.</Text>
            <PressableIcon
              style={styles.homeIcon}
              icon={faPlus}
              onPress={handleNavigation}
            />
          </View>
        }
        style={{ flex: 1 }}
        data={cards}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <Card
            color={item.color}
            title={item.titulo}
            content={item.descricao}
            date={item.dataCriacao.toString()}
          />
        )}
      />
    </View>
  );
};

export { Home };
