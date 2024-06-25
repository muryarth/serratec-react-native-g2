import axios from "axios";
import { useState } from "react";
import { styles } from "./style";
import { View, TextInput, Text } from "react-native";
import { DefaultAppButton } from "../../components/DefaultAppButton";
import { ModalComponent } from "../../components/ModalComponent";

const CardCreator = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modalComponent, setModalComponent] = useState(false);

  const handleSubmit = async () => {
    try {
      const data = {
        titulo: titulo,
        descricao: descricao,
        dataCriacao: new Date(),
      };

      await axios.post(
        "https://667a29fb18a459f639528da9.mockapi.io/todo/lembrete/",
        data
      );
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

        <View
          style={{
            flex: 1,
            width: "100%",
            paddingHorizontal: 45,
          }}
        >
          {!descricao && (
            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                justifyContent: "center",
                paddingTop: 5,
              }}
            >
              <Text
                style={{ color: "#2E2E2E", fontSize: 15, fontWeight: "400" }}
              >
                Escreva o conteúdo do card...
              </Text>
            </View>
          )}

          <TextInput multiline value={descricao} onChangeText={setDescricao} />
        </View>

        <DefaultAppButton title="Confirmar" customOnPress={handleSubmit} />
      </View>
    </>
  );
};

export { CardCreator };
