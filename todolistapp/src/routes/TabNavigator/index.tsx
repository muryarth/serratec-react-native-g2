import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../pages/CardsHome";
import { CardCreator } from "../../pages/CardsCreator";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faPenNib } from "@fortawesome/free-solid-svg-icons/faPenNib";
import { TabBarIcon } from "./TabBarIcon";
import { BottomTabNavigationParams } from "../types";

const Tab = createBottomTabNavigator<BottomTabNavigationParams>();

function TabNavigator() {
  const color = { normal: "#DCDCDC", focused: "cyan" };

  return (
    <Tab.Navigator
      screenOptions={{
        title: "",
        headerShown: false,
        tabBarStyle: {
          height: 70,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#2E2E2E",
        },
        tabBarActiveTintColor: color.focused,
        tabBarInactiveTintColor: color.normal,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon
              title={"Feed"}
              color={color}
              iconSize={size}
              icon={faHouse}
            />
          ),
        }}
        name="TabsHome"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon
              title={"Criar"}
              color={color}
              iconSize={size}
              icon={faPenNib}
            />
          ),
        }}
        name="TabsCardCreator"
        component={CardCreator}
      />
    </Tab.Navigator>
  );
}

export { TabNavigator };
