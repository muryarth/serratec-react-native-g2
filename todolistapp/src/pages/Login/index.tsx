import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigator = useNavigation();

  const handleLogin = () => {
    navigator.navigate("Home");
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Ir para home.</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Login };
