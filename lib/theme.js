import { DefaultTheme } from "@react-navigation/native";

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    bottomTabBackground: "#171717",
    bottomTabText: "#FFFFFF",
    bottomTabActiveText: "#FFFFFF",
    background: '#000000',
    text: '#FFFFFF',
  }
}