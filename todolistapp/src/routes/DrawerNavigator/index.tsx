import { createDrawerNavigator } from "@react-navigation/drawer";
import { CardsFavorites } from "../../pages/CardsFavorites";
import { TabNavigator } from "../TabNavigator";
import { DrawerNavigationParams } from "../types";

const Drawer = createDrawerNavigator<DrawerNavigationParams>();

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
        name="DrawerCards"
        component={TabNavigator}
      />
      <Drawer.Screen
        options={{
          title: "Favoritos",
        }}
        name="DrawerFavorites"
        component={CardsFavorites}
      />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
