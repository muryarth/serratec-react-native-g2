import { View, Text } from "react-native";
import { DefaultAppButton } from "../../components/DefaultAppButton";
import Card from "../../components/CardComponent";

const Home = () => {
  return (
    <View>
      <Card/>
      <Card cardTitle="titulo2" cardBody="batatinha"/>

    </View>
  );
};

export { Home };