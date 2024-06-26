import axios from "axios";
import { Alert } from "react-native";

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateUser = async (
  username: string,
  password: string,
  errorCallback: () => void,
  successCallback: (userId: number) => void
) => {
  if (username && validateEmail(username) && password) {
    try {
      const response = await axios.post("http://10.0.2.2:8080/login", {
        username,
        password,
      });
      if (response.status === 200) {
        Alert.alert("Login realizado!");
        console.log("Login realizado!");
        successCallback(response.data.usuarioId);
      } else {
        Alert.alert(
          "Login não realizado!",
          response.data.message || "Aconteceu algum erro..."
        );
        errorCallback();
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          Alert.alert("Login não realizado!", "Email ou senha invalidos!");
        }
      } else {
        Alert.alert("Erro na requisição!", "Aconteceu um erro inesperado.");
        console.log("Erro na requisição!", error);
      }
      errorCallback();
    }
  } else {
    errorCallback();
  }
};

export { validateEmail, validateUser };
