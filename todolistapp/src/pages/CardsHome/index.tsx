import axios from "axios";
import { useEffect } from "react";
import { FlatList } from "react-native";
import { HomeEmpty } from "./HomeEmpty";
import { HomeHeader } from "./HomeHeader";
import { Card as CardComponent } from "../../components/CardComponent";
import { useAuth } from "../../hooks/useAuth";
import {
  handleFavoriteCard,
  handleDeleteCard,
  handlePinCard,
  setRandomCardColors,
} from "../../services/CardController";

const Home = () => {
  const { cards, setCards } = useAuth();
  const { userId } = useAuth();

  const getCards = async () => {
    axios
      .get(`http://10.0.2.2:8080/tarefa/${userId}/tarefas`)
      .then((response) =>
        setRandomCardColors(response.data, setCards, [
          "#c6f5f5",
          "#b1ecec",
          "#a7edec",
        ])
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
      data={[
        ...cards
          .filter((e) => e.pinned)
          .sort(
            (a, b) =>
              new Date(b.dataCriacao).getTime() -
              new Date(a.dataCriacao).getTime()
          ),
        ...cards
          .filter((e) => !e.pinned)
          .sort(
            (a, b) =>
              new Date(b.dataCriacao).getTime() -
              new Date(a.dataCriacao).getTime()
          ),
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
