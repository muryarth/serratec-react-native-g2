import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";
import { DefaultAppButton } from "../../components/DefaultAppButton";
import axios from "axios";
import { useState } from "react";
import { ModalComponent } from "../../components/ModalComponent";

const CardCreator = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('')
  const [modalComponent, setModalComponent] = useState(false)
  

  const handleCardCreator = async () => {
    try {
      const data ={
        titulo: titulo,
        descricao: descricao,
      };

      await axios.post ("https://6674c60975872d0e0a977f85.mockapi.io/lembrete", data)
      setModalComponent(true)
      setTitulo('');
      setDescricao('');
    }catch (error){
      
      console.error(error);
    }
    
  };

  return (
    <View style={styles.cardText}>
      <View style={styles.cardContainer}>
        
    <TextInput
      placeholder="Insira um Título"
      value={titulo}
      onChangeText={setTitulo}

    />
    </View>
      <TextInput multiline 
      style ={styles.cardTextInput} 
      placeholder="Insira o Conteúdo do Card"
      value={descricao}
      onChangeText={setDescricao}
      />
      
      <DefaultAppButton titulo="Criar" customOnPress={handleCardCreator}/>

      <ModalComponent visible={modalComponent} handleClose ={() => setModalComponent(false)}
     modalTitle={"Card criado com sucesso!"}/>
    </View>
  );
};

export { CardCreator };
