import { Text, SafeAreaView, Keyboard, Alert, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Icon from "@expo/vector-icons/Ionicons";
import { styles } from "./style";
import { TextInputComponent } from "../../components/TextInputComponent";
import { DefaultAppButton } from "../../components/DefaultAppButton";

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigator = useNavigation();

  const placeholderColor = "#000";

  const [emailError, setEmailError] = useState<boolean>(false);
  const [senhaError, setSenhaError] = useState<boolean>(false);

  const handleEmail = (value: string) => {
    setUsername(value);
  };

  const handleSenha = (value: string) => {
    setPassword(value);
  };

  const handleCadastro = () => {
    navigator.navigate("StackCadastro",{name:'cadastro'});
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleErrors = () => {
    let emailErr = false;
    let senhaErr = false;

    if (!username || !validateEmail(username)) {
      emailErr = true;
    }

    if (!password) {
      senhaErr = true;
    }

    setEmailError(emailErr);
    setSenhaError(senhaErr);

    if (!emailErr && !senhaErr) {
      return false;
    } else {
      return true;
    }
  };

  // const handleLogin = async () => {
  //   if (!handleErrors()) {
  //     try {
  //       const response = await axios.post("http://10.0.2.2:8080/login", {
  //         username,
  //         password,
  //       });
  //       if (response.status === 200) {
  //         Alert.alert("Login realizado!");
  //         console.log("Login realizado!");
  //         navigator.navigate("StackHome");
  //       } else {
  //         Alert.alert(
  //           "Login não realizado!",
  //           response.data.message || "Aconteceu algum erro..."
  //         );
  //       }
  //     } catch (error: any) {
  //       if (error.response) {
  //         if (error.response.status === 401) {
  //           Alert.alert("Login não realizado!", "Email ou senha invalidos!");
  //         }
  //       } else {
  //         Alert.alert("Erro na requisição!", "Aconteceu um erro inesperado.");
  //         console.log("Erro na requisição!", error);
  //       }
  //     }
  //   }
  // };

  const handleLogin = () => {
    if (!handleErrors()) {
      navigator.navigate("StackHome",{name:'home'});
    }
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
              placeholder="Digite seu email"
              placeholderColor={placeholderColor}
              onChangeValue={handleEmail}
              error={emailError}
              errorText="Preencha com um email valido!"
            />

            <TextInputComponent
              onChangeValue={handleSenha}
              placeholderColor={placeholderColor}
              placeholder="Digite sua senha"
              type={true}
              error={senhaError}
              errorText="Preencha a senha!"
            />
          </View>

          <View style={styles.buttons}>
            <DefaultAppButton titulo="Entrar" customOnPress={handleLogin} />

            <DefaultAppButton
              titulo="Cadastrar"
              customOnPress={handleCadastro}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export { Login };
