import { View, FlatList } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { Card as CardComponent } from "../../components/CardComponent";
import {
  handleFavoriteCard,
  handleDeleteCard,
} from "../../services/CardController";
import { styles } from "./styles";
import { FavoritesEmpty } from "./FavoritesEmpty";
import { FavoritesHeader } from "./FavoritesHeader";

const CardsFavorites = () => {
  const { cards, setCards } = useAuth();

  return (
    <FlatList
      ListEmptyComponent={<FavoritesEmpty />}
      ListHeaderComponent={<FavoritesHeader />}
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
