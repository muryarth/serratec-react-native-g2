import { createDrawerNavigator } from "@react-navigation/drawer";
import { CardsFavorites } from "../../pages/CardsFavorites";
import { TabNavigator } from "../TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: { color: "white" },
        headerTintColor: "white",
        drawerStyle: { backgroundColor: "#2E2E2E" },
        headerStyle: { backgroundColor: "#2E2E2E" },
      }}
    >
      <Drawer.Screen
        options={{
          title: "Lembretes",
        }}
        name="DrawerHome"
        component={TabNavigator}
      />
      <Drawer.Screen
        options={{
          title: "Favoritos",
        }}
        name="DrawerCardCreator"
        component={CardsFavorites}
      />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
