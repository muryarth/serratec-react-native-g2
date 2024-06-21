import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackRouter } from "./StackRouter";

const Router = () => {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
};

export { Router };
