import { createDrawerNavigator } from "@react-navigation/drawer";
import { Favorites } from "../pages/Favorites";
import { TabNavigator } from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
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
        component={Favorites}
      />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
