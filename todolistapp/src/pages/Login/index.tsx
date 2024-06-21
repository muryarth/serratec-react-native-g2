import { Text, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigator = useNavigation();

  const handleLogin = () => {
    navigator.navigate("StackHome");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TouchableOpacity onPress={handleLogin}>
        <Text>Ir para home.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export { Login };
