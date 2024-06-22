import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { DefaultAppButton } from "../../components/DefaultAppButton";
const CardCreator = () => {
  return (
    <View style={styles.cardText}>
      <View style={styles.cardContainer}>
        <TextInput placeholder="Titulo"></TextInput>
      </View>
      <TextInput multiline style ={styles.cardTextInput} placeholder="Conteudo do Card"></TextInput >
      <DefaultAppButton titulo="Criar" customOnPress={()=>console.log("Clicou")}/>
    </View>
  );
};

export { CardCreator };
