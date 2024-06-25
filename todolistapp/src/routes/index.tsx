import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";
import { AuthProvider } from "../hooks/useAuth";

const Router = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export { Router };
