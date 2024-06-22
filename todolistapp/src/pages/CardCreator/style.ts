import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#B0E0E6', // cor de fundo clara
    shadowColor: '#000', // cor da sombra
    shadowOffset: { width: 0, height: 2 }, // posição da sombra
    shadowOpacity: 0.25, // opacidade da sombra
    shadowRadius: 3.84, // raio da sombra
    elevation: 5, // elevação (sombra no Android)
    alignItems: "center",
    width:"100%"
  },
  cardText: {
    alignItems:"center",
    justifyContent:"space-between",
    flex:1
  },
  cardTextInput:{
    width:300,
    textAlign:"center"
  }
   
});


