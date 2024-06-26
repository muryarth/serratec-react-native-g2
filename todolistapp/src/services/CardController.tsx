import { CardsList } from "../@types";
import { deleteCard } from "./CardsHttpRequests";

const generateRandomKey = (range: number, lastKey?: number): number => {
  const number = Math.floor(Math.random() * range);
  return number !== lastKey ? number : generateRandomKey(range, lastKey);
};

const setRandomCardColors = (
  cards: CardsList,
  setCards: (value: CardsList) => void,
  colors: string[]
) => {
  let lastKey = colors.length;

  setCards(
    cards
      .sort(
        (a, b) =>
          new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime()
      )
      .map((card) => {
        const key = generateRandomKey(colors.length, lastKey);
        lastKey = key;
        card.color = colors[key];
        return card;
      })
  );
};

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

export {
  handleDeleteCard,
  handlePinCard,
  handleFavoriteCard,
  setRandomCardColors,
};
