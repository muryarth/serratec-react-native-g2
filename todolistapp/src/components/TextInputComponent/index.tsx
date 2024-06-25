import React from "react";
import { TextInput, View, Text, Image } from "react-native";
import { styles } from "./style";

interface PropsComponent {
  value?: string;
  placeholder: string;
  placeholderColor: string;
  type?: boolean;
  onChangeValue: (value: string) => void;
  error?: boolean;
  errorText?: string;
  style?: {};
}

export function TextInputComponent({
  value = "",
  placeholder,
  placeholderColor,
  type,
  onChangeValue,
  error,
  errorText,
  style,
}: PropsComponent) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBar}>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={[
            styles.styleInput,
            style,
            { borderColor: error ? "red" : "#afeeee" },
          ]}
          secureTextEntry={type}
          onChangeText={onChangeValue}
        />
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{errorText}</Text>
        </View>
      )}
    </View>
  );
}
