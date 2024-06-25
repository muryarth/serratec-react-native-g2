export type Card = {
  id: number;
  titulo: string;
  autor: string;
  descricao: string;
  dataCriacao: Date;
  color: string;
  pinned: boolean;
};

export type CardsList = Card[];
