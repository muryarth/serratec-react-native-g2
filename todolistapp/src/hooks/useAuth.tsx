// import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";

export type ContextDataType = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
};

const Context = createContext<ContextDataType>({
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
});

const AuthProvider = ({ children }: any) => {
  // const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Context.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAuth = () => useContext(Context);

export { useAuth, AuthProvider };
