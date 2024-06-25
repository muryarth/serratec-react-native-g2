import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";
import { validateUser } from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ContextDataType = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  userId: number;
  setUserId: (value: number) => void;
  loginAuth: (
    email: string,
    password: string,
    errorCallback?: () => void
  ) => void;
};

const Context = createContext<ContextDataType>({
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  userId: 0,
  setUserId: () => {},
  loginAuth: () => {},
});

const AuthProvider = ({ children }: any) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);

  const loginAuth = (
    username: string,
    password: string,
    errorCallback?: () => void
  ) => {
    validateUser(
      username,
      password,
      errorCallback ? errorCallback : () => console.log("Falha!"),
      async () => {
        await storeData({ username, userId });
        navigation.navigate("StackHome", { name: "StackHome" });
      }
    );
  };

  interface User {
    username: string;
    userId: number;
  }

  const storeData = async (user: User) => {
    try {
      const value = JSON.stringify(user);
      await AsyncStorage.setItem("@infouser", value);
      console.log("Salvando usario: ", email, " ID: ", userId);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@infouser");
      if (value != null) {
        const user = JSON.parse(value);
        setEmail(user.username);
        setUserId(user.userId);
        console.log("Carregando usario: ", email, " ID: ", userId);
        navigation.navigate("StackHome", { name: "StackHome" });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Context.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        userId,
        setUserId,
        loginAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAuth = () => useContext(Context);

export { useAuth, AuthProvider };
