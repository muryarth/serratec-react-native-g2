import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList } from "react-native";
import { styles } from "./style";
import { HomeEmpty } from "./HomeEmpty";
import { HomeHeader } from "./HomeHeader";
import { Card as CardComponent } from "../../components/CardComponent";
import { Card, CardsList } from "../../@types";

const Home = () => {
  const [cards, setCards] = useState<CardsList>([]);

  const handleDeleteCard = async (id: number) => {
    axios
      .delete(`https://667a29fb18a459f639528da9.mockapi.io/todo/lembrete/${id}`)
      .then(() => setCards(cards.filter((card) => card.id !== id)))
      .catch((error) => console.log(error));
  };

  const handleFavoriteCard = (id: number) => {};

  const handlePinCard = (id: number) => {
    setCards(
      cards.map((e) => {
        if (e.id == id) {
          e.pinned = !e.pinned;
        }
        return e;
      })
    );
  };

  const generateRandomKey = (range: number, lastKey?: number): number => {
    const number = Math.floor(Math.random() * range);
    return number !== lastKey ? number : generateRandomKey(range, lastKey);
  };

  const setRandomCardColors = (cards: CardsList, colors: string[]) => {
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
        data={[
          ...cards.filter((e) => e.pinned),
          ...cards.filter((e) => !e.pinned),
        ]}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <>
            <CardComponent
              pinned={item.pinned}
              color={item.color}
              title={item.titulo}
              content={item.descricao}
              date={new Date(item.dataCriacao).toLocaleString()}
              handlePinPress={() => handlePinCard(item.id)}
              handleFavoritePress={() => {}}
              handleRemovePress={() => handleDeleteCard(item.id)}
            />
          </>
        )}
      />
    </View>
  );
};

export { Home };
