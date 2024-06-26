import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { CardsFavorites } from "../../pages/CardsFavorites";
import { TabNavigator } from "../TabNavigator";
import { DrawerNavigationParams } from "../types";
import { Text } from "react-native";
import { useAuth } from "../../hooks/useAuth";

const Drawer = createDrawerNavigator<DrawerNavigationParams>();

const DrawerNavigator = () => {
  const { email } = useAuth();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: () => false,
        headerRight: () => (
          <Text style={{ color: "white", paddingHorizontal: 16, fontSize: 16 }}>
            {email}
          </Text>
        ),
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
