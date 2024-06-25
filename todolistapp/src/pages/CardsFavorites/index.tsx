import { View, Text, FlatList } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { Card as CardComponent } from "../../components/CardComponent";

const CardsFavorites = () => {
  const { favs } = useAuth();
  return (
    <FlatList
      style={{ flex: 1 }}
      data={favs}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => (
        <CardComponent
          favorited={item.favorited}
          pinned={item.pinned}
          color={item.color}
          title={item.titulo}
          content={item.descricao}
          date={new Date(item.dataCriacao).toLocaleString()}
          handlePinPress={() => {}}
          handleFavoritePress={() => {}}
          handleRemovePress={() => {}}
        />
      )}
    />
  );
};

export { CardsFavorites };
