import axios from "axios";
import { CardsList } from "../@types";

const deleteCard = async (
  id: number,
  cards: CardsList
): Promise<CardsList> => {
  return axios
    .delete(`https://667a29fb18a459f639528da9.mockapi.io/todo/lembrete/${id}`)
    .then(() => cards.filter((card) => card.id !== id))
    .catch((error) => {
      throw new Error(error);
    });
};

export { deleteCard };
