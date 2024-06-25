import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";
import { validateUser } from "../services/auth";

export type ContextDataType = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
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
  loginAuth: () => {},
});

const AuthProvider = ({ children }: any) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginAuth = (
    username: string,
    password: string,
    errorCallback?: () => void
  ) => {
    validateUser(
      username,
      password,
      errorCallback ? errorCallback : () => console.log("Falha!"),
      () => navigation.navigate("StackHome", { name: "StackHome" })
    );
  };

  return (
    <Context.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        loginAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAuth = () => useContext(Context);

export { useAuth, AuthProvider };
