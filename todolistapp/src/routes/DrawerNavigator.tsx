import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../pages/Home";
import { CardCreator } from "../pages/CardCreator";
import { Favorites } from "../pages/Favorites";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="CardCreator" component={CardCreator} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
