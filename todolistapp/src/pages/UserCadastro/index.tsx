import axios from "axios";
import Icon from "@expo/vector-icons/Ionicons";
import { Text, SafeAreaView, Keyboard, View, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { TextInputComponent } from "../../components/TextInputComponent";
import { DefaultAppButton } from "../../components/DefaultAppButton";
import { validateEmail } from "../../services/Authentication";

function UserCadastro() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmSenha, setConfirmSenha] = useState<string>("");

  const navigator = useNavigation();

  const placeholderColor = "#000";

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmSenhaError, setConfirmSenhaError] = useState<boolean>(false);

  const handleEmail = (value: string) => {
    setEmailError(false);
    setUsername(value);
  };

  const handleSenha = (value: string) => {
    setPasswordError(false);
    setPassword(value);
  };

  const handleConfirmSenha = (value: string) => {
    setConfirmSenhaError(false);
    setConfirmSenha(value);
  };

  const handleLogin = () => {
    navigator.navigate("StackLogin", { name: "Login" });
  };

  const handleErrors = () => {
    let emailErr = false;
    let senhaErr = false;
    let confirmSenhaErr = false;

    if (!username || !validateEmail(username)) {
      emailErr = true;
    }

    if (!password) {
      senhaErr = true;
    }

    if (!confirmSenha) {
      confirmSenhaErr = true;
    }

    setEmailError(emailErr);
    setPasswordError(senhaErr);
    setConfirmSenhaError(confirmSenhaErr);

    if (!emailErr && !senhaErr && !confirmSenhaErr) {
      return false;
    } else {
      return true;
    }
  };

  const handleCadastro = async () => {
    if (!handleErrors()) {
      if (password !== confirmSenha) {
        Alert.alert("Erro no cadastro", "Senhas não são iguais!");
      } else {
        try {
          console.log("Tentando conexão com a API...");
          const response = await axios.post(
            "http://10.0.2.2:8080/login/cadastrar",
            { username, password }
          );
          if (response.status === 200) {
            Alert.alert("Cadastro realizado com sucesso!");
            console.log("Cadastro realizado!");
            navigator.navigate("StackLogin", { name: "Login" });
          } else {
            Alert.alert(
              "Cadastro não realizado!",
              response.data.message || "Aconteceu algum erro..."
            );
          }
        } catch (error: any) {
          if (error.response) {
            if (error.response.status === 400) {
              Alert.alert("Cadastro não realizado!", error.response.data);
            }
          } else {
            Alert.alert("Erro na requisição!", "Aconteceu um erro inesperado.");
            console.log("Erro na requisição!", error);
          }
        }
      }
    }
  };

  // const handleCadastro = () => {
  //   if (!handleErrors()) {
  //     navigator.navigate("StackLogin", { name: "Login" });
  //   }
  // };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.textinput}>
          <View style={styles.containerIcon}>
            <Icon style={styles.icon} name="person-add-outline" size={120} />
            <Text style={styles.title}>CADASTRO</Text>
          </View>

            <TextInputComponent
              value={username}
              placeholder="Digite seu email"
              placeholderColor={placeholderColor}
              onChangeValue={handleEmail}
              error={emailError}
              errorText="Preencha com um email valido!"
            />

            <TextInputComponent
              value={password}
              placeholder="Digite sua senha"
              placeholderColor={placeholderColor}
              onChangeValue={handleSenha}
              type={true}
              error={passwordError}
              errorText="Preencha a senha!"
            />

            <TextInputComponent
              value={confirmSenha}
              placeholderColor={placeholderColor}
              placeholder="Confirmar senha"
              onChangeValue={handleConfirmSenha}
              type={true}
              error={confirmSenhaError}
              errorText="Preencha o confirma senha!"
            />

            <View style={styles.buttons}>
              <DefaultAppButton
                style={{ width: "90%" }}
                title="Cadastrar"
                customOnPress={handleCadastro}
              />

              <DefaultAppButton
                style={{ width: "90%" }}
                title="Voltar ao login"
                customOnPress={handleLogin}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export { UserCadastro };
