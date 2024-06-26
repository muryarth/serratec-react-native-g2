import axios from "axios";
import { useState } from "react";
import { styles } from "./style";
import { View, TextInput, Text } from "react-native";
import { ModalComponent } from "../../components/ModalComponent";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { PressableIcon } from "../../components/PressableIcon";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";

const CardCreator = () => {
  const navigator = useNavigation();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modalComponent, setModalComponent] = useState(false);
  const { cards, setCards } = useAuth();

  const handleCancel = () => {
    setTitulo("");
    setDescricao("");
    setModalComponent(false);
    navigator.navigate("TabsHome", { name: "TabsHome" });
  };

  const handleSubmit = async () => {
    try {
      const data = {
        titulo: titulo,
        descricao: descricao,
        dataCriacao: new Date(),
      };

      await axios
        .post(
          "https://667a29fb18a459f639528da9.mockapi.io/todo/lembrete/",
          data
        )
        .then((response) => {
          const cardsList = [...cards, response.data];
          setCards(
            cardsList.sort(
              (a, b) =>
                new Date(b.dataCriacao).getTime() -
                new Date(a.dataCriacao).getTime()
            )
          );
        });

      setModalComponent(true);
      setTitulo("");
      setDescricao("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ModalComponent
        visible={modalComponent}
        handleClose={() => setModalComponent(false)}
        modalTitle={"Card criado com sucesso!"}
      />

      <View style={styles.cardContainer}>
        <TextInput
          style={styles.cardTitle}
          placeholder="Escreva um título..."
          placeholderTextColor={"#2E2E2E"}
          value={titulo}
          onChangeText={setTitulo}
        />

        <View style={styles.cardDescriptionContainer}>
          {!descricao && (
            <View style={styles.cardDescriptionPlaceholderContainer}>
              <Text style={styles.cardDescriptionPlaceholderText}>
                Escreva o conteúdo do card...
              </Text>
            </View>
          )}
          <TextInput multiline value={descricao} onChangeText={setDescricao} />
        </View>

        <View style={styles.cardCreatorButtonsGroup}>
          <PressableIcon
            style={styles.cardCreatorButton}
            icon={faXmark}
            onPress={handleCancel}
          />
          <PressableIcon
            style={styles.cardCreatorButton}
            icon={faCheck}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </>
  );
};

export { CardCreator };
