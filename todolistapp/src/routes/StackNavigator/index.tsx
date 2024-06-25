import { createStackNavigator } from "@react-navigation/stack";
import { UserLogin } from "../../pages/UserLogin";
import { UserCadastro } from "../../pages/UserCadastro";
import { DrawerNavigator } from "../DrawerNavigator";

export type ParametrosDaRota = {
  StackLogin: { name: string };
  StackCadastro: { name: string };
  StackHome: { name: string };
};
const Stack = createStackNavigator<ParametrosDaRota>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StackLogin" component={UserLogin} />
      <Stack.Screen name="StackCadastro" component={UserCadastro} />
      <Stack.Screen name="StackHome" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export { StackNavigator };
