import { FlatList } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { Card as CardComponent } from "../../components/CardComponent";
import {
  handleFavoriteCard,
  handleDeleteCard,
} from "../../services/CardController";

const CardsFavorites = () => {
  const { cards, setCards } = useAuth();

  return (
    <FlatList
      // style={{ flex: 1 }}
      data={[...cards.filter((e) => e.favorited)]}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => (
        <CardComponent
          favorited={item.favorited}
          pinned={item.pinned}
          color={item.color}
          title={item.titulo}
          content={item.descricao}
          date={new Date(item.dataCriacao).toLocaleString()}
          pinDisabled={true}
          editDisabled={true}
          handleRemovePress={() => handleDeleteCard(item.id, cards, setCards)}
          handleFavoritePress={() =>
            handleFavoriteCard(item.id, cards, setCards)
          }
        />
      )}
    />
  );
};

export { CardsFavorites };
