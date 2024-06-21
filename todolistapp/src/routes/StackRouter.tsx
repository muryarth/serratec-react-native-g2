import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

const Stack = createStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export { StackRouter };
