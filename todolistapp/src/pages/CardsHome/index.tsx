import axios from "axios";
import { useEffect } from "react";
import { FlatList } from "react-native";
import { HomeEmpty } from "./HomeEmpty";
import { HomeHeader } from "./HomeHeader";
import { Card as CardComponent } from "../../components/CardComponent";
import { CardsList } from "../../@types";
import { useAuth } from "../../hooks/useAuth";
import {
  handleFavoriteCard,
  handleDeleteCard,
  handlePinCard,
} from "../../services/CardController";

const Home = () => {
  const { cards, setCards } = useAuth();

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
        <CardComponent
          favorited={item.favorited}
          pinned={item.pinned}
          color={item.color}
          title={item.titulo}
          content={item.descricao}
          date={new Date(item.dataCriacao).toLocaleString()}
          editDisabled={true}
          handlePinPress={() => handlePinCard(item.id, cards, setCards)}
          handleFavoritePress={() =>
            handleFavoriteCard(item.id, cards, setCards)
          }
          handleRemovePress={() => handleDeleteCard(item.id, cards, setCards)}
        />
      )}
    />
  );
};

export { Home };
