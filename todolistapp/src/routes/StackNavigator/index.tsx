import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../pages/Login"
import { Cadastro } from "../../pages/Cadastro";
import { DrawerNavigator } from "../DrawerNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen name="StackCadastro" component={Cadastro} />
      <Stack.Screen name="StackHome" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export { StackNavigator };
