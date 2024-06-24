import { View } from "react-native";
import Card from "../../components/CardComponent";

const Home = () => {
  return (
    <View>
      <Card
        cardTitle="titulo2"
        cardContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus at natus vitae cumque quaerat, ad esse! Rerum molestias laborum, blanditiis et dolore unde. Iusto, quidem possimus. Iusto, expedita ratione."
      />
      <Card cardTitle="titulo2" cardContent="batatinha" />
      <Card cardTitle="titulo2" cardContent="batatinha" />
    </View>
  );
};

export { Home };
