import { createStackNavigator } from "@react-navigation/stack";
import { UserLogin } from "../../pages/UserLogin";
import { UserCadastro } from "../../pages/UserCadastro";
import { DrawerNavigator } from "../DrawerNavigator";
import { StackNavigationParams } from "../types";

const Stack = createStackNavigator<StackNavigationParams>();

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
