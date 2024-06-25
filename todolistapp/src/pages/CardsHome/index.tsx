import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList } from "react-native";
import { styles } from "./style";
import { HomeEmpty } from "./HomeEmpty";
import { HomeHeader } from "./HomeHeader";
import { Card } from "../../components/CardComponent";
import { Card as CardProps } from "../../@types";

const Home = () => {
  const [cards, setCards] = useState<CardProps>([]);
  const [pinnedCards, setPinnedCards] = useState<CardProps>([]);

  const handleDeleteCard = async (id: number) => {
    axios
      .delete(`https://667a29fb18a459f639528da9.mockapi.io/todo/lembrete/${id}`)
      .then(() => setCards(cards.filter((card) => card.id !== id)))
      .catch((error) => console.log(error));
  };

  const handleFavoriteCard = (id: number) => {};

  const handlePinCard = (id: number) => {};

  const generateRandomKey = (range: number, lastKey?: number): number => {
    const number = Math.floor(Math.random() * range);
    return number !== lastKey ? number : generateRandomKey(range, lastKey);
  };

  const setRandomCardColors = (cards: CardProps, colors: string[]) => {
    let lastKey = colors.length;

    setCards(
      cards
        .sort(
          (a, b) =>
            new Date(b.dataCriacao).getTime() -
            new Date(a.dataCriacao).getTime()
        )
        .map((card) => {
          const key = generateRandomKey(colors.length, lastKey);
          lastKey = key;
          card.color = colors[key];
          return card;
        })
    );
  };

  const getCards = async () => {
    axios
      .get("https://667a29fb18a459f639528da9.mockapi.io/todo/lembrete")
      .then((response) =>
        setRandomCardColors(response.data, ["#c6f5f5", "#dcfcfc"])
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <FlatList
        ListEmptyComponent={<HomeEmpty />}
        ListHeaderComponent={<HomeHeader />}
        style={{ flex: 1 }}
        data={cards}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <Card
            color={item.color}
            title={item.titulo}
            content={item.descricao}
            date={new Date(item.dataCriacao).toLocaleString()}
            handlePinPress={() => {}}
            handleFavoritePress={() => {}}
            handleRemovePress={() => handleDeleteCard(item.id)}
          />
        )}
      />
    </View>
  );
};

export { Home };
