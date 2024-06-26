const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateUser = (
  username: string,
  password: string,
  errorCallback: () => void,
  successCallback: () => void
) => {
  if (username && validateEmail(username) && password) {
    successCallback();
  } else {
    errorCallback();
  }
};

// Outro tipo de validação mais complexa
// const loginAuth = async () => {
//   if (!validateUser()) {
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

export { validateEmail, validateUser };
