import { TextInputProps } from "react-native";

export type InputProps = TextInputProps & {
  placeholder: string;
  value?: string;
  onTypeText?: (text: string) => void;
};