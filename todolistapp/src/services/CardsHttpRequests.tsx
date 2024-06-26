import axios from "axios";
import { CardsList } from "../@types";

const deleteCard = async (
  id: number,
  cards: CardsList
): Promise<CardsList> => {
  return axios
    .delete(`http://10.0.2.2:8080/tarefa/${id}`)
    .then(() => cards.filter((card) => card.id !== id))
    .catch((error) => {
      throw new Error(error);
    });
};

export { deleteCard };
