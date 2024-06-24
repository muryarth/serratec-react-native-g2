import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { Alert, Keyboard, View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";
import { styles } from "./style";
import { TextInputComponent } from "../../components/TextInputComponent";
import { DefaultAppButton } from "../../components/DefaultAppButton";
import { SafeAreaView } from "react-native-safe-area-context";

export function Cadastro() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmSenha, setConfirmSenha] = useState<string>("");

  const navigator = useNavigation();

  const placeholderColor = "#000";

  const [emailError, setEmailError] = useState<boolean>(false);
  const [senhaError, setSenhaError] = useState<boolean>(false);
  const [confirmSenhaError, setConfirmSenhaError] = useState<boolean>(false);

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handleSenha = (value: string) => {
    setSenha(value);
  };

  const handleConfirmSenha = (value: string) => {
    setConfirmSenha(value);
  };

  const handleLogin = () => {
    navigator.navigate("StackLogin");
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleErrors = () => {
    let emailErr = false;
    let senhaErr = false;
    let confirmSenhaErr = false;

    if (!email || !validateEmail(email)) {
      emailErr = true;
    }

    if (!senha) {
      senhaErr = true;
    }

    if (!confirmSenha) {
      confirmSenhaErr = true;
    }

    setEmailError(emailErr);
    setSenhaError(senhaErr);
    setConfirmSenhaError(confirmSenhaErr);

    if (!emailErr && !senhaErr && !confirmSenhaErr) {
      return false;
    } else {
      return true;
    }
  };

  //   const handleCadastro = async () => {
  //     if (!handleErrors()) {
  //       if (senha !== confirmSenha) {
  //         Alert.alert("Erro no cadastro", "Senhas não são iguais!");
  //       } else {
  //         try {
  //           console.log("Tentando conexão com a API...");
  //           const response = await axios.post(
  //             "http://10.0.2.2:8080/login/cadastrar",
  //             { email, senha }
  //           );

  //           if (response.status === 200) {
  //             Alert.alert("Cadastro realizado com sucesso!");
  //             navigator.navigate("StackLogin");
  //           } else {
  //             Alert.alert(
  //               "Cadastro não realizado!",
  //               response.data.message || "Aconteceu algum erro..."
  //             );
  //           }
  //         } catch (error: any) {
  //           if (error.response) {
  //             if (error.response.status === 400) {
  //               Alert.alert("Cadastro não realizado!", error.response.data);
  //             }
  //           } else {
  //             Alert.alert("Erro na requisição!", "Aconteceu um erro inesperado.");
  //             console.log("Erro na requisição!", error);
  //           }
  //         }
  //       }
  //     }
  //   };

  const handleCadastro = () => {
    if (!handleErrors()) {
      navigator.navigate("StackLogin");
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.textinput}>
            <Icon style={styles.icon} name="person-add-outline" size={120} />
            <Text style={styles.title}>CADASTRO</Text>

            <TextInputComponent
              placeholder="Digite seu email"
              placeholderColor={placeholderColor}
              onChangeValue={handleEmail}
              error={emailError}
              errorText="Preencha com um email valido!"
            />

            <TextInputComponent
              placeholder="Digite sua senha"
              placeholderColor={placeholderColor}
              onChangeValue={handleSenha}
              type={true}
              error={senhaError}
              errorText="Preencha a senha!"
            />

            <TextInputComponent
              placeholderColor={placeholderColor}
              placeholder="Confirmar senha"
              onChangeValue={handleConfirmSenha}
              type={true}
              error={confirmSenhaError}
              errorText="Preencha o confirma senha!"
            />
          </View>
          <View style={styles.buttons}>
            <DefaultAppButton
              titulo="Cadastrar"
              customOnPress={handleCadastro}
            />

            <DefaultAppButton
              titulo="Voltar ao login"
              customOnPress={handleLogin}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
