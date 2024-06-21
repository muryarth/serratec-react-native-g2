import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { Text } from "react-native-svg";
import { CardCreator } from "../pages/CardCreator";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faPenNib } from "@fortawesome/free-solid-svg-icons/faPenNib";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const color = { normal: "gray", focused: "cyan" };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { color: color.normal },
        tabBarActiveTintColor: color.focused,
        tabBarInactiveTintColor: color.normal,
      }}
    >
      <Tab.Screen
        options={{
          title: "Feed",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon color={color} size={size} icon={faHouse} />
          ),
        }}
        name="TabsHome"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: "Criar",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon color={color} size={size} icon={faPenNib} />
          ),
        }}
        name="TabsCardCreator"
        component={CardCreator}
      />
    </Tab.Navigator>
  );
}

export { TabNavigator };
