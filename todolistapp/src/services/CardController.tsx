import { CardsList } from "../@types";
import { deleteCard } from "./CardsHttpRequests";

const handleDeleteCard = async (
  id: number,
  cards: CardsList,
  setCards: (value: CardsList) => void
) => {
  deleteCard(id, cards).then((response) => {
    setCards(response);
  });
};

const handleFavoriteCard = (
  id: number,
  cards: CardsList,
  setCards: (value: CardsList) => void
) => {
  setCards(
    cards.map((e) => {
      if (e.id == id) {
        e.favorited = !e.favorited;
      }
      return e;
    })
  );
};

const handlePinCard = (
  id: number,
  cards: CardsList,
  setCards: (value: CardsList) => void
) => {
  setCards(
    cards.map((e) => {
      if (e.id == id) {
        e.pinned = !e.pinned;
      }
      return e;
    })
  );
};

export { handleDeleteCard, handlePinCard, handleFavoriteCard };
