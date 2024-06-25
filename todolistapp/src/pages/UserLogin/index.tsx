import axios from "axios";
import Icon from "@expo/vector-icons/Ionicons";
import { Text, SafeAreaView, Keyboard, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { TextInputComponent } from "../../components/TextInputComponent";
import { DefaultAppButton } from "../../components/DefaultAppButton";
import { useAuth } from "../../hooks/useAuth";
import { validateEmail } from "../../services/auth";

const UserLogin = () => {
  // const [username, setUsername] = useState<string>();
  // const [password, setPassword] = useState<string>();
  const navigator = useNavigation();
  const placeholderColor = "#000";
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  // Extraindo do Context
  const { email, setEmail } = useAuth();
  const { password, setPassword } = useAuth();
  const { loginAuth } = useAuth();

  const handleEmail = (value: string) => {
    setEmailError(false);
    setEmail(value);
  };

  const handleSenha = (value: string) => {
    setPasswordError(false);
    setPassword(value);
  };

  const handleLogin = () => {
    loginAuth(email, password, () => {
      if (!email || !validateEmail(email)) setEmailError(true);
      if (!password) setPasswordError(true);
    });
  };

  const handleCadastro = () => {
    navigator.navigate("StackCadastro", { name: "cadastro" });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.textinput}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name="person-outline" size={120} />
              <Text style={styles.title}>LOGIN</Text>
            </View>

            <TextInputComponent
              value={email}
              placeholder="Digite seu email"
              placeholderColor={placeholderColor}
              onChangeValue={handleEmail}
              error={emailError}
              errorText="Preencha com um email valido!"
            />

            <TextInputComponent
              value={password}
              onChangeValue={handleSenha}
              placeholderColor={placeholderColor}
              placeholder="Digite sua senha"
              type={true}
              error={passwordError}
              errorText="Preencha a senha!"
            />

            <View style={styles.buttons}>
              <DefaultAppButton
                style={{ width: "90%" }}
                title="Entrar"
                customOnPress={handleLogin}
              />
              <DefaultAppButton
                style={{ width: "90%" }}
                title="Cadastrar"
                customOnPress={handleCadastro}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export { UserLogin };
